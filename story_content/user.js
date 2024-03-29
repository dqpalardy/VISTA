function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6A0r30CQWM9":
        Script1();
        break;
      case "6d7XfgiG7II":
        Script2();
        break;
      case "5yUDyw646j1":
        Script3();
        break;
      case "6fvuwDtTFNB":
        Script4();
        break;
      case "6OWyTfh1OCd":
        Script5();
        break;
      case "629r5sGalIe":
        Script6();
        break;
      case "5hcasXBaKd5":
        Script7();
        break;
      case "6cU9lXhpZOR":
        Script8();
        break;
      case "62AsQEXvFm2":
        Script9();
        break;
      case "5tcwWzQOrWD":
        Script10();
        break;
      case "699V7HP9bEt":
        Script11();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6MOoRRCNzFW');
const duration = 750;
const easing = 'ease-out';
const id = '6Dn8nyCmS1G';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6MOoRRCNzFW');
const duration = 750;
const easing = 'ease-out';
const id = '6Dn8nyCmS1G_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6HXxzubKHet');
const duration = 750;
const easing = 'ease-out';
const id = '6b5KY5dxMwz';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6HXxzubKHet');
const duration = 750;
const easing = 'ease-out';
const id = '6b5KY5dxMwz_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6Spu2kPMjJX');
const duration = 750;
const easing = 'ease-out';
const id = '6Yt290AqTZY';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6Spu2kPMjJX');
const duration = 750;
const easing = 'ease-out';
const id = '6Yt290AqTZY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6hEW01cECRf');
const duration = 750;
const easing = 'ease-out';
const id = '5mjX2JBhKI8';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6hEW01cECRf');
const duration = 750;
const easing = 'ease-out';
const id = '5mjX2JBhKI8_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6awtuyrsPW4');
const duration = 500;
const easing = 'ease-out';
const id = '5vogyF059HL';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5gSpJGxQ6fh');
const duration = 750;
const easing = 'ease-out';
const id = '62JBsvRDtf2';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5kaBw1T4FaD');
const duration = 500;
const easing = 'ease-out';
const id = '6golEY69mDc';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};