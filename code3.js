gdjs.SettingsCode = {};
gdjs.SettingsCode.GDsettings_95txtObjects1= [];
gdjs.SettingsCode.GDsettings_95txtObjects2= [];
gdjs.SettingsCode.GDsettings_95txtObjects3= [];
gdjs.SettingsCode.GDsettings_95txtObjects4= [];
gdjs.SettingsCode.GDmenuObjects1= [];
gdjs.SettingsCode.GDmenuObjects2= [];
gdjs.SettingsCode.GDmenuObjects3= [];
gdjs.SettingsCode.GDmenuObjects4= [];
gdjs.SettingsCode.GDbg_953Objects1= [];
gdjs.SettingsCode.GDbg_953Objects2= [];
gdjs.SettingsCode.GDbg_953Objects3= [];
gdjs.SettingsCode.GDbg_953Objects4= [];
gdjs.SettingsCode.GDbg_951Objects1= [];
gdjs.SettingsCode.GDbg_951Objects2= [];
gdjs.SettingsCode.GDbg_951Objects3= [];
gdjs.SettingsCode.GDbg_951Objects4= [];
gdjs.SettingsCode.GDrestartObjects1= [];
gdjs.SettingsCode.GDrestartObjects2= [];
gdjs.SettingsCode.GDrestartObjects3= [];
gdjs.SettingsCode.GDrestartObjects4= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.SettingsCode.GDmenuObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.SettingsCode.GDmenuObjects1});gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{


{
}

}


};gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


{
}

}


{


{

{ //Subevents
gdjs.SettingsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.SettingsCode.GDbg_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.SettingsCode.GDmenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.SettingsCode.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings_txt"), gdjs.SettingsCode.GDsettings_95txtObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDsettings_95txtObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettings_95txtObjects1[i].getBehavior("Tween").addObjectPositionYTween("gameover_txt", 130, "bounce", 1000, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDrestartObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmenuObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 534, "bouncePast", 700, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDbg_951Objects1[i].getBehavior("Tween").addObjectPositionXTween("bg_pop", -(10), "linear", 1000, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("settings_txt"), gdjs.SettingsCode.GDsettings_95txtObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDsettings_95txtObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettings_95txtObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.SettingsCode.GDsettings_95txtObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.SettingsCode.GDmenuObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmenuObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.4, 1.4, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.SettingsCode.GDmenuObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmenuObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmenuObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmenuObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDmenuObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmenuObjects1[i].getBehavior("Tween").addObjectScaleTween("scale", 1.2, 1.2, "bouncePast", 150, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.SettingsCode.GDbg_951Objects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDbg_951Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbg_951Objects1[i].getX() == -(10) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDbg_951Objects1[k] = gdjs.SettingsCode.GDbg_951Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbg_951Objects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbg_951Objects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDbg_951Objects1[i].setXOffset(gdjs.SettingsCode.GDbg_951Objects1[i].getXOffset() + (1.5));
}
}}

}


{


{
}

}


{


gdjs.SettingsCode.eventsList2(runtimeScene);
}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDsettings_95txtObjects1.length = 0;
gdjs.SettingsCode.GDsettings_95txtObjects2.length = 0;
gdjs.SettingsCode.GDsettings_95txtObjects3.length = 0;
gdjs.SettingsCode.GDsettings_95txtObjects4.length = 0;
gdjs.SettingsCode.GDmenuObjects1.length = 0;
gdjs.SettingsCode.GDmenuObjects2.length = 0;
gdjs.SettingsCode.GDmenuObjects3.length = 0;
gdjs.SettingsCode.GDmenuObjects4.length = 0;
gdjs.SettingsCode.GDbg_953Objects1.length = 0;
gdjs.SettingsCode.GDbg_953Objects2.length = 0;
gdjs.SettingsCode.GDbg_953Objects3.length = 0;
gdjs.SettingsCode.GDbg_953Objects4.length = 0;
gdjs.SettingsCode.GDbg_951Objects1.length = 0;
gdjs.SettingsCode.GDbg_951Objects2.length = 0;
gdjs.SettingsCode.GDbg_951Objects3.length = 0;
gdjs.SettingsCode.GDbg_951Objects4.length = 0;
gdjs.SettingsCode.GDrestartObjects1.length = 0;
gdjs.SettingsCode.GDrestartObjects2.length = 0;
gdjs.SettingsCode.GDrestartObjects3.length = 0;
gdjs.SettingsCode.GDrestartObjects4.length = 0;

gdjs.SettingsCode.eventsList3(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
