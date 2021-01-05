gdjs.CompleteCode = {};
gdjs.CompleteCode.GDcompleted_95txtObjects1= [];
gdjs.CompleteCode.GDcompleted_95txtObjects2= [];
gdjs.CompleteCode.GDcompleted_95txtObjects3= [];
gdjs.CompleteCode.GDmenuObjects1= [];
gdjs.CompleteCode.GDmenuObjects2= [];
gdjs.CompleteCode.GDmenuObjects3= [];
gdjs.CompleteCode.GDbg_953Objects1= [];
gdjs.CompleteCode.GDbg_953Objects2= [];
gdjs.CompleteCode.GDbg_953Objects3= [];
gdjs.CompleteCode.GDbg_951Objects1= [];
gdjs.CompleteCode.GDbg_951Objects2= [];
gdjs.CompleteCode.GDbg_951Objects3= [];
gdjs.CompleteCode.GDrestartObjects1= [];
gdjs.CompleteCode.GDrestartObjects2= [];
gdjs.CompleteCode.GDrestartObjects3= [];

gdjs.CompleteCode.conditionTrue_0 = {val:false};
gdjs.CompleteCode.condition0IsTrue_0 = {val:false};
gdjs.CompleteCode.condition1IsTrue_0 = {val:false};


gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.CompleteCode.GDmenuObjects1});gdjs.CompleteCode.eventsList0 = function(runtimeScene) {

{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.CompleteCode.GDmenuObjects1});gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.CompleteCode.GDrestartObjects1});gdjs.CompleteCode.eventsList1 = function(runtimeScene) {

{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{


{
}

}


};gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.CompleteCode.GDrestartObjects1});gdjs.CompleteCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("completed_txt"), gdjs.CompleteCode.GDcompleted_95txtObjects1);
{for(var i = 0, len = gdjs.CompleteCode.GDcompleted_95txtObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDcompleted_95txtObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.CompleteCode.GDcompleted_95txtObjects1[i].getWidth()) / 2);
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("completed_txt"), gdjs.CompleteCode.GDcompleted_95txtObjects1);
{for(var i = 0, len = gdjs.CompleteCode.GDcompleted_95txtObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDcompleted_95txtObjects1[i].getBehavior("Tween").addObjectPositionYTween("gameover_txt", 220, "bounce", 1000, false);
}
}}

}


{


gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.CompleteCode.GDbg_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.CompleteCode.GDmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.CompleteCode.GDrestartObjects1);
{for(var i = 0, len = gdjs.CompleteCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDrestartObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDmenuObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDbg_951Objects1[i].getBehavior("Tween").addObjectPositionXTween("bg_pop", -(10), "linear", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.CompleteCode.GDmenuObjects1);

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CompleteCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.CompleteCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDmenuObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.CompleteCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.CompleteCode.GDmenuObjects1);

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDmenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CompleteCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.CompleteCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDmenuObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.CompleteCode.GDbg_951Objects1);

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CompleteCode.GDbg_951Objects1.length;i<l;++i) {
    if ( gdjs.CompleteCode.GDbg_951Objects1[i].getX() == -(10) ) {
        gdjs.CompleteCode.condition0IsTrue_0.val = true;
        gdjs.CompleteCode.GDbg_951Objects1[k] = gdjs.CompleteCode.GDbg_951Objects1[i];
        ++k;
    }
}
gdjs.CompleteCode.GDbg_951Objects1.length = k;}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CompleteCode.GDbg_951Objects1 */
{for(var i = 0, len = gdjs.CompleteCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDbg_951Objects1[i].setXOffset(gdjs.CompleteCode.GDbg_951Objects1[i].getXOffset() + (1.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.CompleteCode.GDrestartObjects1);

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CompleteCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.CompleteCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDrestartObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDrestartObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.CompleteCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.CompleteCode.GDrestartObjects1);

gdjs.CompleteCode.condition0IsTrue_0.val = false;
{
gdjs.CompleteCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CompleteCode.mapOfGDgdjs_46CompleteCode_46GDrestartObjects1Objects, runtimeScene, true, true);
}if (gdjs.CompleteCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CompleteCode.GDrestartObjects1 */
{for(var i = 0, len = gdjs.CompleteCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDrestartObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.CompleteCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDrestartObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("completed_txt"), gdjs.CompleteCode.GDcompleted_95txtObjects1);
{for(var i = 0, len = gdjs.CompleteCode.GDcompleted_95txtObjects1.length ;i < len;++i) {
    gdjs.CompleteCode.GDcompleted_95txtObjects1[i].setOutline("212;74;65", 5);
}
}}

}


};

gdjs.CompleteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CompleteCode.GDcompleted_95txtObjects1.length = 0;
gdjs.CompleteCode.GDcompleted_95txtObjects2.length = 0;
gdjs.CompleteCode.GDcompleted_95txtObjects3.length = 0;
gdjs.CompleteCode.GDmenuObjects1.length = 0;
gdjs.CompleteCode.GDmenuObjects2.length = 0;
gdjs.CompleteCode.GDmenuObjects3.length = 0;
gdjs.CompleteCode.GDbg_953Objects1.length = 0;
gdjs.CompleteCode.GDbg_953Objects2.length = 0;
gdjs.CompleteCode.GDbg_953Objects3.length = 0;
gdjs.CompleteCode.GDbg_951Objects1.length = 0;
gdjs.CompleteCode.GDbg_951Objects2.length = 0;
gdjs.CompleteCode.GDbg_951Objects3.length = 0;
gdjs.CompleteCode.GDrestartObjects1.length = 0;
gdjs.CompleteCode.GDrestartObjects2.length = 0;
gdjs.CompleteCode.GDrestartObjects3.length = 0;

gdjs.CompleteCode.eventsList2(runtimeScene);
return;

}

gdjs['CompleteCode'] = gdjs.CompleteCode;
