const assert=require('node:assert/strict'),E=require('./engine.js');
assert.equal(E.COURSE_LENGTH,Infinity);
for(let seed=1;seed<=25;seed++){
 const s=E.create(seed);E.start(s);let ticks=0,levels=0,relics=0;
 while(s.distance<10000&&s.phase==='playing'&&ticks++<50000){
  const near=s.rows.find(r=>!r.done&&r.z<22),relic=s.tokens.find(t=>t.type==='relic'&&!t.done&&t.z<24&&t.z>0),target=near?near.safe:relic?relic.lane:s.lane;
  while(s.lane<target)E.action(s,'right');while(s.lane>target)E.action(s,'left');E.step(s,1/60);
  for(const row of s.rows){assert(row.blocks.length<=2);assert(!row.blocks.some(b=>b.lane===row.safe));}
  assert(s.rows.length<12);assert(s.tokens.length<50);assert(s.relicCount>=relics);relics=s.relicCount;
  for(const event of s.events.splice(0)){assert.notEqual(event.type,'finish');if(event.type==='levelUp')levels++;}
 }
 assert.equal(s.phase,'playing','seed '+seed);assert(s.distance>=10000);assert.equal(s.lives,3);assert(s.level>=66);assert(levels>=66);assert(s.relicCount>=20,'relics continue beyond900m');
}
let speed=0,spacing=Infinity;for(const d of [0,150,900,1500,3000,10000,100000,1000000]){const p=E.difficulty(d);assert(p.speed>=speed);assert(p.spacing<=spacing);assert(p.speed<=36&&p.spacing>=26);assert(p.spacing/p.speed>.72);speed=p.speed;spacing=p.spacing;}
assert(E.difficulty(150000).level>E.difficulty(15000).level);
const q=E.create(42);E.start(q);q.jump=.1;assert(E.action(q,'jump'));E.step(q,.05);E.step(q,.05);assert(q.jump>1);assert.equal(q.queued,null);
const over=E.create(10);E.start(over);for(let i=0;i<50000&&over.phase==='playing';i++)E.step(over,1/60);assert.equal(over.phase,'over');const n=over.events.filter(e=>e.type==='over').length,score=over.score,dist=over.distance;E.step(over,.05);assert.equal(n,1);assert.equal(over.score,score);assert.equal(over.distance,dist);
console.log('PASS25 seeded10km runs: no finish, safe lanes, no hits, continuing relics, bounded memory,66+ levels. PASS difficulty continues, playable speed/spacing limits, jump buffer, single game-over and frozen result.');
