gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDgameover_95txtObjects1= [];
gdjs.Game_32OverCode.GDgameover_95txtObjects2= [];
gdjs.Game_32OverCode.GDgameover_95txtObjects3= [];
gdjs.Game_32OverCode.GDmenuObjects1= [];
gdjs.Game_32OverCode.GDmenuObjects2= [];
gdjs.Game_32OverCode.GDmenuObjects3= [];
gdjs.Game_32OverCode.GDbg_953Objects1= [];
gdjs.Game_32OverCode.GDbg_953Objects2= [];
gdjs.Game_32OverCode.GDbg_953Objects3= [];
gdjs.Game_32OverCode.GDbg_951Objects1= [];
gdjs.Game_32OverCode.GDbg_951Objects2= [];
gdjs.Game_32OverCode.GDbg_951Objects3= [];
gdjs.Game_32OverCode.GDrestartObjects1= [];
gdjs.Game_32OverCode.GDrestartObjects2= [];
gdjs.Game_32OverCode.GDrestartObjects3= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.Game_32OverCode.GDmenuObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.Game_32OverCode.GDmenuObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.Game_32OverCode.GDrestartObjects1});gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{


{
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.Game_32OverCode.GDrestartObjects1});gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("gameover_txt"), gdjs.Game_32OverCode.GDgameover_95txtObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDgameover_95txtObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDgameover_95txtObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Game_32OverCode.GDgameover_95txtObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gameover_txt"), gdjs.Game_32OverCode.GDgameover_95txtObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDgameover_95txtObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDgameover_95txtObjects1[i].getBehavior("Tween").addObjectPositionYTween("gameover_txt", 220, "bounce", 1000, false);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.Game_32OverCode.GDbg_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Game_32OverCode.GDmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.Game_32OverCode.GDrestartObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDrestartObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmenuObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbg_951Objects1[i].getBehavior("Tween").addObjectPositionXTween("bg_pop", -(10), "linear", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Game_32OverCode.GDmenuObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmenuObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Game_32OverCode.GDmenuObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmenuObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.Game_32OverCode.GDbg_951Objects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32OverCode.GDbg_951Objects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDbg_951Objects1[i].getX() == -(10) ) {
        gdjs.Game_32OverCode.condition0IsTrue_0.val = true;
        gdjs.Game_32OverCode.GDbg_951Objects1[k] = gdjs.Game_32OverCode.GDbg_951Objects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDbg_951Objects1.length = k;}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDbg_951Objects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDbg_951Objects1[i].setXOffset(gdjs.Game_32OverCode.GDbg_951Objects1[i].getXOffset() + (1.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.Game_32OverCode.GDrestartObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDrestartObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDrestartObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.Game_32OverCode.GDrestartObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDrestartObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDrestartObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("gameover_txt"), gdjs.Game_32OverCode.GDgameover_95txtObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDgameover_95txtObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDgameover_95txtObjects1[i].setOutline("212;74;65", 5);
}
}}

}


{


{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDgameover_95txtObjects1.length = 0;
gdjs.Game_32OverCode.GDgameover_95txtObjects2.length = 0;
gdjs.Game_32OverCode.GDgameover_95txtObjects3.length = 0;
gdjs.Game_32OverCode.GDmenuObjects1.length = 0;
gdjs.Game_32OverCode.GDmenuObjects2.length = 0;
gdjs.Game_32OverCode.GDmenuObjects3.length = 0;
gdjs.Game_32OverCode.GDbg_953Objects1.length = 0;
gdjs.Game_32OverCode.GDbg_953Objects2.length = 0;
gdjs.Game_32OverCode.GDbg_953Objects3.length = 0;
gdjs.Game_32OverCode.GDbg_951Objects1.length = 0;
gdjs.Game_32OverCode.GDbg_951Objects2.length = 0;
gdjs.Game_32OverCode.GDbg_951Objects3.length = 0;
gdjs.Game_32OverCode.GDrestartObjects1.length = 0;
gdjs.Game_32OverCode.GDrestartObjects2.length = 0;
gdjs.Game_32OverCode.GDrestartObjects3.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
