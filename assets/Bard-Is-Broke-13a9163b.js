import{o as m,d as O,i as x,b as u,n as B,f as j,g as D,m as C,j as I,k as b,l as k,v as F,q as V,r as _,s as N,t as L,e as R,u as E,c as q,F as A}from"./index-cf8ed356.js";import{P as M}from"./project-3cd4e6af.js";var P={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return l=>["number","string","boolean"].indexOf(typeof l)!==-1||l==null},required:!1},modelValue:{validator:function(e){return l=>["number","string","boolean"].indexOf(typeof l)!==-1||l==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,l){const t=function(o,c,r){const{value:d,modelValue:i,falseValue:n,trueValue:a,disabled:f}=b(o),s=i&&i.value!==void 0?i:d,h=k(()=>s.value===a.value),v=g=>{c.emit("input",g),c.emit("update:modelValue",g),c.emit("change",g)},S=()=>{v(a.value)},T=()=>{v(n.value)};return[null,void 0,!1,0,"0","off"].indexOf(s.value)!==-1&&[n.value,a.value].indexOf(s.value)===-1&&T(),[!0,1,"1","on"].indexOf(s.value)!==-1&&[n.value,a.value].indexOf(s.value)===-1&&S(),{externalValue:s,checked:h,update:v,check:S,uncheck:T,handleInput:g=>{v(g.target.checked?a.value:n.value)},handleClick:()=>{f.value||(h.value?T():S())}}}(e,l),w=function(o,c,r){const{trueValue:d,falseValue:i,onLabel:n,offLabel:a}=b(o),f=r.checked,s=r.update;return{label:k(()=>{let h=f.value?n.value:a.value;return h||(h="&nbsp;"),h}),toggle:()=>{s(f.value?i.value:d.value)},on:()=>{s(d.value)},off:()=>{s(i.value)}}}(e,0,{checked:t.checked,update:t.update}),p=function(o,c,r){const d=b(o),i=d.disabled,n=r.checked,a=k(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...d.classes.value}));return{classList:k(()=>({container:a.value.container,toggle:[a.value.toggle,i.value?n.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:n.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,i.value?n.value?a.value.handleOnDisabled:a.value.handleOffDisabled:n.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}(e,0,{checked:t.checked}),y=function(o,c,r){const{disabled:d}=b(o),i=r.check,n=r.uncheck,a=r.checked;return{handleSpace:()=>{d.value||(a.value?n():i())}}}(e,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...p,...w,...y}}};const G=["tabindex","aria-checked","aria-describedby","aria-labelledby"],U=["id","name","value","checked","disabled"],z=["innerHTML"],W=["checked"];P.render=function(e,l,t,w,p,y){return m(),O("div",C({class:e.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch"},t.aria,{onKeypress:l[1]||(l[1]=I(V((...o)=>e.handleSpace&&e.handleSpace(...o),["prevent"]),["space"]))}),[x(u("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:e.checked,disabled:t.disabled},null,8,U),[[F,!1]]),u("div",{class:B(e.classList.toggle),onClick:l[0]||(l[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[u("span",{class:B(e.classList.handle)},null,2),j(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[u("span",{class:B(e.classList.label),innerHTML:e.label},null,10,z)]),t.required?(m(),O("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,W)):D("v-if",!0)],2)],16,G)},P.__file="src/Toggle.vue";const H={style:{position:"absolute",left:"2%"}},J=u("br",null,null,-1),K=u("br",null,null,-1),$={__name:"Bard-Is-Broke",setup(e){const l=_(!0),t=_("");return N(()=>{t.value=l.value?"Gameplay":"Tools"}),(w,p)=>(m(),O(A,null,[u("div",H,[u("h4",null,L(t.value),1),R(E(P),{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=y=>l.value=y)},null,8,["modelValue"])]),J,K,l.value?(m(),q(M,{key:0,"project-pictures":["/BiBGameplayMedia/BiB_anim.gif","/BiBGameplayMedia/vn_ava.png","/BiBGameplayMedia/vn_mic.png","/BiBGameplayMedia/BiB_Trailer.mp4"],"project-links":{"itch.io":"https://vfs-gdpg.itch.io/bard-is-broke"},"code-snippets":{"SequenceManager Snippet ▼":`// this guy just allows other classes 
// (Like the Input handler) to advance the current sequence
public void OnNext()
{
    if (_endedEarly)
    {
        CurrentDay.CurrentSequence.StopSequence();
        DayIndex = _sequenceManagers.Count - 1;
        _endedEarly = false;
        return;
    }

    CurrentDay.CurrentSequence.AdvanceSequence();
}`,"Sequence ScriptableObject Snippet ▼":`[CreateAssetMenu(menuName = "SequenceObject/Sequences/EndGame")]
public class EndSequence : ASequence
{
    // these guys determine what end state to display
    [SerializeField] private float _minimumMoney;
    [SerializeField] private float _minimumHeartPoints;

    // load the level, it is async because we have to wait for the
    // level to be fully loaded before creating everything
    public override async void StartSequence()
    {
        base.StartSequence();
        await LoadLevel();
    }

    // end the game by heading back to the menu
    public override void StopSequence()
    {
        Destroy(FindObjectOfType<StudioEventEmitter>().gameObject);

        FindObjectOfType<PlayerProgress>().TotalHeartPoints = 0;
        FindObjectOfType<PlayerProgress>().TotalScore = 0;

        SceneManager.LoadScene("Menu");
        base.StopSequence();
    }

    /// <summary>
    /// this guy just loops a wait until the level is loaded 
    /// before doing all the things we want, things like 
    /// creating our input handler
    /// finding the end display text
    /// finding our players scores
    /// overriding the end text
    /// </summary>
    private async Task LoadLevel()
    {
        var progress = FindAnyObjectByType<PlayerProgress>();
     
        float money = progress.Money;
        float heartPoints = progress.TotalHeartPoints;
        
        string finalText = "";

        if (money > _minimumMoney) finalText += "Rhythm";
        if (heartPoints > _minimumHeartPoints) finalText += "Dating";
        if (finalText.IsNullOrWhitespace()) finalText += "Homeless";

        finalText += "Ending";
        
        // we need to store the scene loading in a variable for our while loop
        AsyncOperation load = SceneManager.LoadSceneAsync(finalText);

        // while the load is loading just wait
        while (!load.isDone)
        {
            await Task.Yield();
        }
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
}`},title:"Bard is Broke",desc:"Bard is Broke is a 3D Rhythm Visual Novel made in Unity from July to December 2023. I was the gameplay programmer as well as the tools programmer. The most complicated problem I encountered was the sequencing from genre to genre. Creating a smooth transition from rhythm to dating and vice versa took some thinking to solve. The solution I eventually came to was to use Unity’s ScriptableObject class to create assets that could then be dragged and dropped in and out of a day manager to allow my designers to modify and add new gameplay sequences painlessly, and most importantly, without my assistance. The structure of these SO’s were heavily inspired by some linked lists we wrote in a class earlier in the year, as each sequence had a reference to the next one. If I could go back in time I would have liked to have made these sequences closer to doubly linked lists, as that could have allowed for a ‘redo’ button on certain sequences.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"])):(m(),q(M,{key:1,"project-pictures":["/BiBToolsMedia/UploadRhythm.mp4","/BiBToolsMedia/ReaperScreenShot.png","/BiBToolsMedia/WebToolScreenShot.png","/BiBToolsMedia/TwineScreenShot.png","/BiBToolsMedia/CreateBeatmapInReaper.mp4"],"project-links":{Build:"/BiBToolsMedia/WebtoolBuild.zip"},"code-snippets":{"Vue Webtool Snippet ▼":`<template>
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
