import{o as m,d as _,i as x,b as u,n as T,f as R,g as I,m as D,j as N,k as y,l as k,v as V,q,r as O,s as j,t as F,e as L,u as G,c as C,F as A}from"./index-d2163b18.js";import{P as M}from"./project-c11d7ebc.js";var P={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return o=>["number","string","boolean"].indexOf(typeof o)!==-1||o==null},required:!1},modelValue:{validator:function(e){return o=>["number","string","boolean"].indexOf(typeof o)!==-1||o==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,o){const t=function(i,c,r){const{value:d,modelValue:n,falseValue:l,trueValue:a,disabled:v}=y(i),s=n&&n.value!==void 0?n:d,h=k(()=>s.value===a.value),b=g=>{c.emit("input",g),c.emit("update:modelValue",g),c.emit("change",g)},S=()=>{b(a.value)},B=()=>{b(l.value)};return[null,void 0,!1,0,"0","off"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&B(),[!0,1,"1","on"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&S(),{externalValue:s,checked:h,update:b,check:S,uncheck:B,handleInput:g=>{b(g.target.checked?a.value:l.value)},handleClick:()=>{v.value||(h.value?B():S())}}}(e,o),w=function(i,c,r){const{trueValue:d,falseValue:n,onLabel:l,offLabel:a}=y(i),v=r.checked,s=r.update;return{label:k(()=>{let h=v.value?l.value:a.value;return h||(h="&nbsp;"),h}),toggle:()=>{s(v.value?n.value:d.value)},on:()=>{s(d.value)},off:()=>{s(n.value)}}}(e,0,{checked:t.checked,update:t.update}),p=function(i,c,r){const d=y(i),n=d.disabled,l=r.checked,a=k(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...d.classes.value}));return{classList:k(()=>({container:a.value.container,toggle:[a.value.toggle,n.value?l.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:l.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,n.value?l.value?a.value.handleOnDisabled:a.value.handleOffDisabled:l.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}(e,0,{checked:t.checked}),f=function(i,c,r){const{disabled:d}=y(i),n=r.check,l=r.uncheck,a=r.checked;return{handleSpace:()=>{d.value||(a.value?l():n())}}}(e,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...p,...w,...f}}};const U=["tabindex","aria-checked","aria-describedby","aria-labelledby"],E=["id","name","value","checked","disabled"],K=["innerHTML"],W=["checked"];P.render=function(e,o,t,w,p,f){return m(),_("div",D({class:e.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch"},t.aria,{onKeypress:o[1]||(o[1]=N(q((...i)=>e.handleSpace&&e.handleSpace(...i),["prevent"]),["space"]))}),[x(u("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:e.checked,disabled:t.disabled},null,8,E),[[V,!1]]),u("div",{class:T(e.classList.toggle),onClick:o[0]||(o[0]=(...i)=>e.handleClick&&e.handleClick(...i))},[u("span",{class:T(e.classList.handle)},null,2),R(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[u("span",{class:T(e.classList.label),innerHTML:e.label},null,10,K)]),t.required?(m(),_("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,W)):I("v-if",!0)],2)],16,U)},P.__file="src/Toggle.vue";const z={style:{position:"absolute",left:"2%"}},J=u("br",null,null,-1),Q=u("br",null,null,-1),$={__name:"Bard-Is-Broke",setup(e){const o=O(!0),t=O("");return j(()=>{t.value=o.value?"Gameplay":"Tools"}),(w,p)=>(m(),_(A,null,[u("div",z,[u("h4",null,F(t.value),1),L(G(P),{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=f=>o.value=f)},null,8,["modelValue"])]),J,Q,o.value?(m(),C(M,{key:0,"project-pictures":["/BiBGameplayMedia/BiB_anim.gif","/BiBGameplayMedia/vn_ava.png","/BiBGameplayMedia/vn_mic.png","/BiBGameplayMedia/BiB_Trailer.mp4"],"project-links":{GitHub:"https://vfs-gdpg.itch.io/bard-is-broke","itch.io":"https://vfs-gdpg.itch.io/bard-is-broke"},"code-snippets":{"SongSelection Snippet ▼":`public class SongSelection : RemoteBehaviour
{
  #region
  public override IConfigurableData Data => new SongSelectionData();
  public override string Name => "SongSelection";
  public override RemoteBehaviour remoteBehaviour => this;
  #endregion

  public List<Song> Songs = new();

  public List<string> GetSongNames()
  {
      List<string> names = new List<string>();
      foreach (Song player in Songs)
      {
          names.Add(player.SongName);
      }

      return names;
  }

  public Song SelectSong(string songName)
  {
      return Songs.Find(x => x.SongName == songName);
  }
}`,"RemoteBehvaiour Snippet ▼":`public class RemoteBehaviour : MonoBehaviour, IRemoteData
{
  #region
  public virtual IConfigurableData Data => throw new NotImplementedException();
  public virtual string Name => throw new NotImplementedException();
  public virtual RemoteBehaviour remoteBehaviour => throw new NotImplementedException();
  #endregion
  public void LoadConfigs<T>(T data) where T : class, IConfigurableData
  {
      Type newType = typeof(T);
      var newFields = newType.GetFields();

      Type oldType = remoteBehaviour.GetType();
      var oldFields = oldType.GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);

      foreach (var f in oldFields)
      {
          foreach (var k in newFields)
          {
              if (f.Name == k.Name)
              {
                  f.SetValue(this, k.GetValue(data));
              }
          }
      }
  }
}`,"CrowdControl Snippet ▼":`public async void UpdateCrowd(float relativePerformance)
{
  List<AnimationState> possibleState = new List<AnimationState>();

  foreach (var possibleRank in _states)
  {
      if (relativePerformance >= possibleRank.Key.Item1 && relativePerformance < possibleRank.Key.Item2)
      {
          possibleState = possibleRank.Value;
      }
  }
  
  if (possibleState == _useableStates) return;
  _useableStates = possibleState;
  
  for (int i = 0; i < transform.childCount; ++i)
  {
      _startTime = Time.time;
      while (Time.time < _startTime + Random.Range(0.1f, 0.2f))
      {
          await Task.Yield();
      }
      
      _newState = possibleState[Random.Range(0, possibleState.Count)];
      
      if (_controlAnimation == null) return;
      
      _controlAnimation?.UpdateCharacter(_newState, i);
  }
}`},title:"Bard is Broke",desc:"Bard is Broke is a 3D Rhythm Visual Novel made in Unity from July to December 2023. I was the gameplay programmer as well as the tools programmer. The most complicated problem I encountered was the sequencing from genre to genre. Creating a smooth transition from rhythm to dating and vice versa took some thinking to solve. The solution I eventually came to was to use Unity’s ScriptableObject class to create assets that could then be dragged and dropped in and out of a day manager to allow my designers to modify and add new gameplay sequences painlessly, and most importantly, without my assistance. The structure of these SO’s were heavily inspired by some linked lists we wrote in a class earlier in the year, as each sequence had a reference to the next one. If I could go back in time I would have liked to have made these sequences closer to doubly linked lists, as that could have allowed for a ‘redo’ button on certain sequences.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"])):(m(),C(M,{key:1,"project-pictures":["/BiBToolsMedia/UploadRhythm.mp4","/BiBToolsMedia/ReaperScreenShot.png","/BiBToolsMedia/WebToolScreenShot.png","/BiBToolsMedia/TwineScreenShot.png","/BiBToolsMedia/CreateBeatmapInReaper.mp4"],"project-links":{GitHub:"https://vfs-gdpg.itch.io/bard-is-broke",Build:"/BiBToolsMedia/WebtoolBuild.zip"},"code-snippets":{"Vue Webtool Snippet ▼":`<template>
    <!--This guy just sits in the top corner and gives us the push button allong with the environment select-->
    <EnvironmentSelection :push="PushChanges"/>
    <!--This guy only shows up while were waiting for UGS to give us a response-->
    <template v-if="data == null">
        <p style="height: 100vh;">Fetching...</p>
    </template>
    <!--
        This guy loops through the expected data structure and displays properly 
        configured input fields for designers instead of straight JSON.
    -->
    <template v-else>
        <ul class="outter-half">
            <div class="background cool-border">
                <li class ="horizontal" v-for="(value, dataType) in data" :key="dataType">
                    <br/>
                    <h1 style="color: #fffd83;">{{ dataType }}</h1>
                    <ul class="inner-half">
                        <li v-for="(innerValue, innerKey) in value" :key="innerKey">
                            <label style="color: #fffd83;">{{ innerKey }}</label>
                            <input class="cool-border" :type="inputType[typeof innerValue]" v-model="value[innerKey]"/>
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
    </template>
</template>`,"LUA Beatmapper Snippet ▼":`function PlaceMarkers()
    -- make sure MIDI editor is open
    CheckForMidi()

    -- add the first marker now so we dont have to in FMOD
    reaper.AddProjectMarker2(0, false, 0, 0, "Playable", -1, Red)

    -- get all the note from the midi
    local noteCount = reaper.MIDI_CountEvts(midiTake)

    -- loop through and create a marker for every single note based of the start and end time and pitch
    for i = 0, noteCount - 1 do
        -- get only the information through the midi note using its index
        local _, _, _, startPosPPQ, endPosPPQ, _, pitch, _ = reaper.MIDI_GetNote(midiTake, i)

        -- calculate the start and end times in seconds and create the string name using its pitch and length
        local startTime = ConvertPPQToSeconds(startPosPPQ)
        local endTime = ConvertPPQToSeconds(endPosPPQ)
        local name = BuildNoteName(pitch, startTime, endTime)
        
        -- Create a marker at the start of the note using the name we generated
        reaper.AddProjectMarker2(0, false, startTime, 0, name, -1, noteColors[name:sub(1, 1)])
    end
end`,"JavaScript FMOD Snippet ▼":`function SaveBeatmap()
{
    // Create BiB_BM and store/overright it in streaming assets
    var oldPath = studio.project.filePath + "/../../Assets/StreamingAssets/RhythmGameBeatMaps/Beatmap.json";
    var old = studio.system.getFile(oldPath);
    
    old.open(studio.system.openMode.ReadWrite);
    old.remove();
    old.close();

    var newPath = studio.project.filePath + "/../../Assets/StreamingAssets/RhythmGameBeatMaps/Beatmap.json";
    var newFile = studio.system.getFile(newPath);

    var newContents = JSON.stringify(SongSelection, null, 2);

    newFile.open(studio.system.openMode.ReadWrite);
    var bytes = newFile.writeText(newContents);
    newFile.close();
    

    var alertMessage = (bytes > 0) ? "Success" : "Failure"; 
    alert(alertMessage);
}`},title:"Bard is Broke",desc:"Bard is Broke is a 3D Rhythm Visual Novel made in Unity from July to December 2023. I was the gameplay programmer as well as the tools programmer. The tool I’m most proud of has to be the remote config system and web tool. I created a web tool that helped our team integrate Unity Gaming Services (UGS) Remote Config system. This remote config system allowed the team to iterate upon feedback extremely quickly, specifically post beta. The tool that went over the most iteration was easily the Beatmapper. The Beatmapper went through 3 major revisions (v0, v1, v2). Version 0 was never gonna be the final solution, but we needed to create a prototype and I also needed to get all the gameplay working so it took a backseat. The solution was to have a separate scene that played back audio and recorded the developers inputs into a binary file (.BiB_BM) that would then get read back during gameplay. This solution had many obvious problems and as such was iterated upon. The next version (version 1) was integrated right into the web tool we were already using for the remote config system. This was the first almost usable version of the tool, it allowed for a developer to right click and create a note, drag it wherever they wanted and submit it remotely, allowing all our beatmaps to actually be stored remotely and updated post release. This version had several bugs and very little feedback for my designers to actually know where in the song they were placing a note, and as such it still required iteration. The next and (maybe) final version of the tool is version 2. The idea for v2 was actually given to me by our sound collaborator and that was to use REAPER, a highly programmable DAW (Digital Audio Workstation). Using REAPER we could play back the audio and record the developers inputs as a midi file that we could then go back and edit, and then at the press of a button, send to a JSON we could then drag and drop into the web tool. This had all the benefits of v1 except the developer knew exactly where in the song they were, cause they could see and hear it.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"]))],64))}};export{$ as default};
