gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDmenuObjects1= [];
gdjs.Main_32MenuCode.GDmenuObjects2= [];
gdjs.Main_32MenuCode.GDsettingsObjects1= [];
gdjs.Main_32MenuCode.GDsettingsObjects2= [];
gdjs.Main_32MenuCode.GDbg_951Objects1= [];
gdjs.Main_32MenuCode.GDbg_951Objects2= [];
gdjs.Main_32MenuCode.GDbg_953Objects1= [];
gdjs.Main_32MenuCode.GDbg_953Objects2= [];
gdjs.Main_32MenuCode.GDplayObjects1= [];
gdjs.Main_32MenuCode.GDplayObjects2= [];
gdjs.Main_32MenuCode.GDlogoObjects1= [];
gdjs.Main_32MenuCode.GDlogoObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(25618564);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1Objects = Hashtable.newFrom({"settings": gdjs.Main_32MenuCode.GDsettingsObjects1});gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(25620460);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.Main_32MenuCode.GDplayObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1Objects = Hashtable.newFrom({"settings": gdjs.Main_32MenuCode.GDsettingsObjects1});gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.Main_32MenuCode.GDbg_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.Main_32MenuCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32MenuCode.GDsettingsObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbg_951Objects1[i].getBehavior("Tween").addObjectPositionXTween("bg_pop", -(10), "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 450, "easeInOutSine", 700, false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDlogoObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 190, "bouncePast", 700, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds\\main menu.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].getBehavior("Tween").addObjectPositionYTween("pop_up", 560, "easeInSine", 700, false);
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("bg_1"), gdjs.Main_32MenuCode.GDbg_951Objects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDbg_951Objects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDbg_951Objects1[i].getX() == -(10) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDbg_951Objects1[k] = gdjs.Main_32MenuCode.GDbg_951Objects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDbg_951Objects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDbg_951Objects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDbg_951Objects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDbg_951Objects1[i].setXOffset(gdjs.Main_32MenuCode.GDbg_951Objects1[i].getXOffset() + (1.5));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.Main_32MenuCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32MenuCode.GDsettingsObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDsettingsObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDlogoObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDlogoObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDplayObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].getBehavior("Tween").addObjectScaleTween("scale_1", 1.5, 1.5, "bouncePast", 200, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32MenuCode.GDsettingsObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDsettingsObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].getBehavior("Tween").addObjectScaleTween("scale_3", 1.5, 1.5, "bouncePast", 150, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Main_32MenuCode.GDplayObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDplayObjects1[i].getBehavior("Tween").addObjectScaleTween("scale_2", 1.3, 1.3, "bouncePast", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settings"), gdjs.Main_32MenuCode.GDsettingsObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDsettingsObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDsettingsObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDsettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDsettingsObjects1[i].getBehavior("Tween").addObjectScaleTween("scale_4", 1.3, 1.3, "bouncePast", 150, false);
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDmenuObjects1.length = 0;
gdjs.Main_32MenuCode.GDmenuObjects2.length = 0;
gdjs.Main_32MenuCode.GDsettingsObjects1.length = 0;
gdjs.Main_32MenuCode.GDsettingsObjects2.length = 0;
gdjs.Main_32MenuCode.GDbg_951Objects1.length = 0;
gdjs.Main_32MenuCode.GDbg_951Objects2.length = 0;
gdjs.Main_32MenuCode.GDbg_953Objects1.length = 0;
gdjs.Main_32MenuCode.GDbg_953Objects2.length = 0;
gdjs.Main_32MenuCode.GDplayObjects1.length = 0;
gdjs.Main_32MenuCode.GDplayObjects2.length = 0;
gdjs.Main_32MenuCode.GDlogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDlogoObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
