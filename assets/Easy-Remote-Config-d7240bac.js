import{P as e}from"./project-841b61ef.js";import{o as t,c as o}from"./index-33ed166d.js";const l={__name:"Easy-Remote-Config",setup(r){return(i,a)=>(t(),o(e,{"project-pictures":["/EasyRemoteConfigMedia/EasyRemoteConfigDemo.mp4","/EasyRemoteConfigMedia/EasyRemoteConfigUpdateDemo.mp4"],"project-links":{GitHub:"https://github.com/Connor-J-deBoer/EasyRemoteConfig.git"},"code-snippets":{"Attribute Drawer Snippet ▼":`namespace Connor.RemoteConfigHelper
{
    [CustomPropertyDrawer(typeof(RemoteFieldAttribute))]
    public class RemoteFieldAttributeDrawer : PropertyDrawer
    {
        private static ServiceAccountConfig _serviceConfig => (ServiceAccountConfig)Resources.Load("ServiceAccount");
        private static EnvironmentConfig _environmentConfig => (EnvironmentConfig)Resources.Load("Environment");
        public async override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            EditorGUI.BeginChangeCheck();
            EditorGUI.PropertyField(position, property, label, true);
            if (EditorGUI.EndChangeCheck())
            {
                if (!_serviceConfig || !_environmentConfig || label.text.Contains("Element")) return;
                await HandleUGSApi.PushToRemote(_serviceConfig, _environmentConfig, property);
            }
        }
    }
}`,"Using the attribute Snippet ▼":`public class Test : MonoBehaviour
{
    [RemoteField]
    [SerializeField] private string _testString = "This super duper long string that is just way way too long";

    [RemoteField]
    [Range(0, 1000)]
    [SerializeField] private int test = 123;

    [RemoteField]
    public bool testBool = false;

    [RemoteField]
    [SerializeField] private List<int> testList = new List<int>()
    {
        10,
        20, 
        30
    };
}`,"Converting Array Snippet ▼":`private static object ConvertArray(Array arrayToConvert, JArray jarray)
{
    Type arrayType = arrayToConvert.GetType().GetElementType();
    // convert each value from the original array and set it again
    for (int i = 0; i < arrayToConvert.Length; ++i)
    {
        var convertedValue = System.Convert.ChangeType(jarray[i], arrayType);
        arrayToConvert.SetValue(convertedValue, i);
    }

    return arrayToConvert;
}`},title:"Easy Remote Config",desc:"This is a Unity package I made as a progression of some of my work on my VFS final project Bard is Broke. The purpose of this package is to make integration with Unity Gaming Services Remote Configuration very streamlined. It addresses some major issues me and my team ran into on that project. The first issue I wanted to address was that other programmers on the project would create a script that should have remotely configurable fields but forget to use the script template that had all the boilerplate required for that solution. I addressed that issue by removing the need for all that boilerplate and making it one field attribute. The next big issue with the last solution was that there was no support for collections. This issue was primarily a time constraint problem, there were tight deadlines for gameplay goals, and adding support for remotely configurable collections wasn’t a high priority but now that I have all the time in the world I wanted to find a solution to this problem. My solution was to create my own conversion handler class that properly converts the JSON to C#. I’ve only spent about 4 days on it now but I think it’ll serve as a valuable package for my personal projects moving forward.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"]))}};export{l as default};
