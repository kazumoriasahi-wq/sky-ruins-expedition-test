const assert=require('node:assert/strict'),E=require('./engine.js');
assert.equal(E.COURSE_LENGTH,900);assert.deepEqual(E.RELIC_DISTANCES,[205,480,755]);
for(let seed=1;seed<=100;seed++){
 const s=E.create(seed);E.start(s);let ticks=0;
 while(s.phase==='playing'&&ticks++<5000){const near=s.rows.find(r=>!r.done&&r.z<22),relic=s.tokens.find(t=>t.type==='relic'&&!t.done&&t.z<27&&t.z>0);const target=near?near.safe:relic?relic.lane:s.lane;if(s.lane<target)E.action(s,'right');else if(s.lane>target)E.action(s,'left');E.step(s,1/60);for(const row of s.rows){assert(row.blocks.length<=2);assert(!row.blocks.some(b=>b.lane===row.safe));if(row.id>=4){const ri=E.RELIC_DISTANCES.findIndex(d=>Math.abs(d-(s.distance+row.z))<23.9);if(ri>=0)assert.equal(row.safe,[-1,1,0][ri]);}}}
 assert.equal(s.phase,'won','course failed seed '+seed);assert.equal(s.distance,900);assert.equal(s.lives,3);assert(s.relics.every(Boolean),'relic missing seed '+seed);assert.equal(s.events.filter(e=>e.type==='finish').length,1);const score=s.score;E.step(s,.05);assert.equal(s.score,score);
}
const q=E.create(42);E.start(q);q.jump=.1;assert(E.action(q,'jump'));E.step(q,.05);E.step(q,.05);assert(q.jump>1);assert.equal(q.queued,null);
const m=E.create(7);E.start(m);for(let i=0;i<5000&&m.phase==='playing';i++)E.step(m,1/60);assert(['over','won'].includes(m.phase));assert(!m.relics.every(Boolean));
for(const d of [0,150,300,450,600,750,900]){const p=E.difficulty(d);assert(p.speed<=23);assert(p.spacing/p.speed>1.4);}
console.log('PASS100 seeded900m courses with all3 relics, no hits, safe rows, terminal state exactly once, jump buffering, missed-relic path, bounded difficulty.');
