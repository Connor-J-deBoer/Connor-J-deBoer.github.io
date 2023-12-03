import{o as b,d as N,i as D,b as u,n as T,f as O,g as C,m as L,j as V,k as y,l as w,v as q,q as F,r as _,s as j,t as G,e as P,u as A,c as x,F as E}from"./index-507f2f4b.js";import{P as I}from"./project-cbeed052.js";var R={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return i=>["number","string","boolean"].indexOf(typeof i)!==-1||i==null},required:!1},modelValue:{validator:function(e){return i=>["number","string","boolean"].indexOf(typeof i)!==-1||i==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,i){const t=function(o,p,s){const{value:d,modelValue:l,falseValue:n,trueValue:a,disabled:v}=y(o),r=l&&l.value!==void 0?l:d,h=w(()=>r.value===a.value),f=m=>{p.emit("input",m),p.emit("update:modelValue",m),p.emit("change",m)},S=()=>{f(a.value)},B=()=>{f(n.value)};return[null,void 0,!1,0,"0","off"].indexOf(r.value)!==-1&&[n.value,a.value].indexOf(r.value)===-1&&B(),[!0,1,"1","on"].indexOf(r.value)!==-1&&[n.value,a.value].indexOf(r.value)===-1&&S(),{externalValue:r,checked:h,update:f,check:S,uncheck:B,handleInput:m=>{f(m.target.checked?a.value:n.value)},handleClick:()=>{v.value||(h.value?B():S())}}}(e,i),c=function(o,p,s){const{trueValue:d,falseValue:l,onLabel:n,offLabel:a}=y(o),v=s.checked,r=s.update;return{label:w(()=>{let h=v.value?n.value:a.value;return h||(h="&nbsp;"),h}),toggle:()=>{r(v.value?l.value:d.value)},on:()=>{r(d.value)},off:()=>{r(l.value)}}}(e,0,{checked:t.checked,update:t.update}),k=function(o,p,s){const d=y(o),l=d.disabled,n=s.checked,a=w(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...d.classes.value}));return{classList:w(()=>({container:a.value.container,toggle:[a.value.toggle,l.value?n.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:n.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,l.value?n.value?a.value.handleOnDisabled:a.value.handleOffDisabled:n.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}(e,0,{checked:t.checked}),g=function(o,p,s){const{disabled:d}=y(o),l=s.check,n=s.uncheck,a=s.checked;return{handleSpace:()=>{d.value||(a.value?n():l())}}}(e,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...k,...c,...g}}};const M=["tabindex","aria-checked","aria-describedby","aria-labelledby"],U=["id","name","value","checked","disabled"],K=["innerHTML"],W=["checked"];R.render=function(e,i,t,c,k,g){return b(),N("div",L({class:e.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch"},t.aria,{onKeypress:i[1]||(i[1]=V(F((...o)=>e.handleSpace&&e.handleSpace(...o),["prevent"]),["space"]))}),[D(u("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:e.checked,disabled:t.disabled},null,8,U),[[q,!1]]),u("div",{class:T(e.classList.toggle),onClick:i[0]||(i[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[u("span",{class:T(e.classList.handle)},null,2),O(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[u("span",{class:T(e.classList.label),innerHTML:e.label},null,10,K)]),t.required?(b(),N("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,W)):C("v-if",!0)],2)],16,M)},R.__file="src/Toggle.vue";const z={style:{position:"absolute",left:"2%"}},H=u("br",null,null,-1),J=u("br",null,null,-1),Q={__name:"Bard-Is-Broke",setup(e){const i=_(!0),t=_(""),c=_(window.innerWidth*.4);return j(()=>{t.value=i.value?"Gameplay":"Tools",c.value=window.innerWidth*.4}),(k,g)=>(b(),N(E,null,[u("div",z,[u("h4",null,G(t.value),1),P(A(R),{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=o=>i.value=o)},null,8,["modelValue"])]),H,J,i.value?(b(),x(I,{key:0,"project-pictures":["/BiB_anim.gif","/vn_ava.png","/vn_mic.png","/BiB_Trailer.mp4"],"project-links":{GitHub:"https://vfs-gdpg.itch.io/bard-is-broke","itch.io":"https://vfs-gdpg.itch.io/bard-is-broke"},"code-snippets":{"SongSelection Snippet ▼":`public class SongSelection : RemoteBehaviour
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
}`},title:"Bard is Broke",desc:"Bard is Broke is a 3D Rhythm Visual Novel made in Unity from July to December 2023. I was the gameplay programmer as well as the tools programmer. The most complicated problem I encountered was the sequencing from genre to genre. Creating a smooth transition from rhythm to dating and vice versa took some thinking to solve. The solution I eventually came to was to use Unity’s ScriptableObject class to create assets that could then be dragged and dropped in and out of a day manager to allow my designers to modify and add new gameplay sequences painlessly, and most importantly, without my assistance. The structure of these SO’s were heavily inspired by some linked lists we wrote in a class earlier in the year, as each sequence had a reference to the next one. If I could go back in time I would have liked to have made these sequences closer to doubly linked lists, as that could have allowed for a ‘redo’ button on certain sequences.",rows:Math.round(Math.min(Math.max(c.value/450,1),3)),"title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets","rows"])):(b(),x(I,{key:1,"project-pictures":["/BiB_anim.gif","/vn_ava.png","/vn_mic.png","/BiB_Trailer.mp4"],"project-links":{GitHub:"https://vfs-gdpg.itch.io/bard-is-broke","itch.io":"https://vfs-gdpg.itch.io/bard-is-broke"},"code-snippets":{"SongSelection Snippet ▼":`public class SongSelection : RemoteBehaviour
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
}`},title:"Bard is Broke",desc:"Bard is Broke is a 3D Rhythm Visual Novel made in Unity from July to December 2023. I was the gameplay programmer as well as the tools programmer. The tool I’m most proud of has to be the remote config system and web tool. I created a web tool that helped our team integrate Unity Gaming Services (UGS) Remote Config system. This remote config system allowed the team to iterate upon feedback extremely quickly, specifically post beta. The tool that went over the most iteration was easily the Beatmapper. The Beatmapper went through 3 major revisions (v0, v1, v2). Version 0 was never gonna be the final solution, but we needed to create a prototype and I also needed to get all the gameplay working so it took a backseat. The solution was to have a separate scene that played back audio and recorded the developers inputs into a binary file (.BiB_BM) that would then get read back during gameplay. This solution had many obvious problems and as such was iterated upon. The next version (version 1) was integrated right into the web tool we were already using for the remote config system. This was the first almost usable version of the tool, it allowed for a developer to right click and create a note, drag it wherever they wanted and submit it remotely, allowing all our beatmaps to actually be stored remotely and updated post release. This version had several bugs and very little feedback for my designers to actually know where in the song they were placing a note, and as such it still required iteration. The next and (maybe) final version of the tool is version 2. The idea for v2 was actually given to me by our sound collaborator and that was to use REAPER, a highly programmable DAW (Digital Audio Workstation). Using REAPER we could play back the audio and record the developers inputs as a midi file that we could then go back and edit, and then at the press of a button, send to a JSON we could then drag and drop into the web tool. This had all the benefits of v1 except the developer knew exactly where in the song they were, cause they could see and hear it.",rows:Math.round(Math.min(Math.max(c.value/450,1),3)),"title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets","rows"]))],64))}};export{Q as default};
