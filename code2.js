gdjs.PauseCode = {};
gdjs.PauseCode.GDpause_95txtObjects1= [];
gdjs.PauseCode.GDpause_95txtObjects2= [];
gdjs.PauseCode.GDpause_95txtObjects3= [];
gdjs.PauseCode.GDmenuObjects1= [];
gdjs.PauseCode.GDmenuObjects2= [];
gdjs.PauseCode.GDmenuObjects3= [];
gdjs.PauseCode.GDbg_953Objects1= [];
gdjs.PauseCode.GDbg_953Objects2= [];
gdjs.PauseCode.GDbg_953Objects3= [];
gdjs.PauseCode.GDbg_951Objects1= [];
gdjs.PauseCode.GDbg_951Objects2= [];
gdjs.PauseCode.GDbg_951Objects3= [];
gdjs.PauseCode.GDrestartObjects1= [];
gdjs.PauseCode.GDrestartObjects2= [];
gdjs.PauseCode.GDrestartObjects3= [];
gdjs.PauseCode.GDresumeObjects1= [];
gdjs.PauseCode.GDresumeObjects2= [];
gdjs.PauseCode.GDresumeObjects3= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};


gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.PauseCode.GDmenuObjects1});gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.PauseCode.GDmenuObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.PauseCode.GDrestartObjects1});gdjs.PauseCode.eventsList1 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{


{
}

}


};gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.PauseCode.GDrestartObjects1});gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.PauseCode.GDresumeObjects1});gdjs.PauseCode.eventsList2 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.PauseCode.GDresumeObjects1});gdjs.PauseCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("pause_txt"), gdjs.PauseCode.GDpause_95txtObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDpause_95txtObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDpause_95txtObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.PauseCode.GDpause_95txtObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pause_txt"), gdjs.PauseCode.GDpause_95txtObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDpause_95txtObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDpause_95txtObjects1[i].getBehavior("Tween").addObjectPositionYTween("gameover_txt", 220, "bounce", 1000, false);
}
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.PauseCode.GDbg_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.PauseCode.GDmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.PauseCode.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.PauseCode.GDresumeObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDrestartObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.PauseCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDmenuObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.PauseCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDbg_951Objects1[i].getBehavior("Tween").addObjectPositionXTween("bg_pop", -(10), "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.PauseCode.GDmenuObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDmenuObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.PauseCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.PauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.PauseCode.GDmenuObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDmenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDmenuObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.PauseCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.PauseCode.GDbg_951Objects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PauseCode.GDbg_951Objects1.length;i<l;++i) {
    if ( gdjs.PauseCode.GDbg_951Objects1[i].getX() == -(10) ) {
        gdjs.PauseCode.condition0IsTrue_0.val = true;
        gdjs.PauseCode.GDbg_951Objects1[k] = gdjs.PauseCode.GDbg_951Objects1[i];
        ++k;
    }
}
gdjs.PauseCode.GDbg_951Objects1.length = k;}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDbg_951Objects1 */
{for(var i = 0, len = gdjs.PauseCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.PauseCode.GDbg_951Objects1[i].setXOffset(gdjs.PauseCode.GDbg_951Objects1[i].getXOffset() + (1.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.PauseCode.GDrestartObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDrestartObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.PauseCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDrestartObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.PauseCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.PauseCode.GDrestartObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDrestartObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.PauseCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDrestartObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.PauseCode.GDresumeObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDresumeObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.PauseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.PauseCode.GDresumeObjects1);

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDresumeObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDresumeObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.PauseCode.GDresumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDresumeObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("pause_txt"), gdjs.PauseCode.GDpause_95txtObjects1);
{for(var i = 0, len = gdjs.PauseCode.GDpause_95txtObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDpause_95txtObjects1[i].setOutline("212;74;65", 5);
}
}}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDpause_95txtObjects1.length = 0;
gdjs.PauseCode.GDpause_95txtObjects2.length = 0;
gdjs.PauseCode.GDpause_95txtObjects3.length = 0;
gdjs.PauseCode.GDmenuObjects1.length = 0;
gdjs.PauseCode.GDmenuObjects2.length = 0;
gdjs.PauseCode.GDmenuObjects3.length = 0;
gdjs.PauseCode.GDbg_953Objects1.length = 0;
gdjs.PauseCode.GDbg_953Objects2.length = 0;
gdjs.PauseCode.GDbg_953Objects3.length = 0;
gdjs.PauseCode.GDbg_951Objects1.length = 0;
gdjs.PauseCode.GDbg_951Objects2.length = 0;
gdjs.PauseCode.GDbg_951Objects3.length = 0;
gdjs.PauseCode.GDrestartObjects1.length = 0;
gdjs.PauseCode.GDrestartObjects2.length = 0;
gdjs.PauseCode.GDrestartObjects3.length = 0;
gdjs.PauseCode.GDresumeObjects1.length = 0;
gdjs.PauseCode.GDresumeObjects2.length = 0;
gdjs.PauseCode.GDresumeObjects3.length = 0;

gdjs.PauseCode.eventsList3(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
