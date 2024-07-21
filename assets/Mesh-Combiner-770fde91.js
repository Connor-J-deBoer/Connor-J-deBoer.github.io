import{P as e}from"./project-7e6422d4.js";import{o as t,c as s}from"./index-0398f881.js";const l={__name:"Mesh-Combiner",setup(i){return(n,o)=>(t(),s(e,{"project-pictures":["/MeshCombinerMedia/CombineSubMeshes.png","/MeshCombinerMedia/SelectionExample.png","/MeshCombinerMedia/MeshPreview.png","/MeshCombinerMedia/MeshCombinerWindow.png"],"project-links":{GitHub:"https://github.com/Connor-J-deBoer/MeshCombiner"},"code-snippets":{"Combine Mesh ▼":`public void CombineMesh()
{
    _combinedMesh = new Mesh();
    _combinedMesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;

    List<CombineInstance[]> subCombine = new List<CombineInstance[]>();
    CombineInstance[] combineTheSubCombine = new CombineInstance[_filters[0].sharedMesh.subMeshCount];

    for (int i = 0; i < _filters[0].sharedMesh.subMeshCount; ++i)
    {
        subCombine.Add(new CombineInstance[_filters.Length]);
        for (int j = 0; j < subCombine[i].Length; ++j)
        {
            subCombine[i][j].mesh = _filters[j].sharedMesh;
            subCombine[i][j].subMeshIndex = i;
            subCombine[i][j].transform = _filters[j].transform.localToWorldMatrix;
        }

        combineTheSubCombine[i].mesh = new Mesh();
        combineTheSubCombine[i].mesh.CombineMeshes(subCombine[i]);
        combineTheSubCombine[i].transform = Matrix4x4.identity;
    }
    _combinedMesh.CombineMeshes(combineTheSubCombine, false);

    SaveAssets.SaveFile($"{_path}_Mesh.asset", _combinedMesh);
}`,"Mesh Combiner Window ▼":`private void CreateGUI()
{
    // Each editor window contains a root VisualElement object
    VisualElement root = rootVisualElement;

    // Instantiate UXML
    VisualElement labelFromUXML = _visualTreeAsset.Instantiate();
    root.Add(labelFromUXML);

    TextField name = root.Q<TextField>("CombinedName");
    ObjectField pathFolder = root.Q<ObjectField>("Path");
    ListView selectedList = root.Q<ListView>("SelectedList");
    Button button = root.Q<Button>("Button");
    Toggle createNewPrefab = root.Q<Toggle>("CreateNewPrefab");
    Toggle createNewTexture = root.Q<Toggle>("CreateNewTexture");

    _path = AssetDatabase.LoadAssetAtPath(EditorPrefs.GetString("path"), typeof(Object));
    if (_path != null) pathFolder.value = _path;

    pathFolder.objectType = typeof(DefaultAsset);

    List<GameObject> selectedObjects = new List<GameObject>();
    Selection.selectionChanged += () =>
    {
        selectedObjects = Selection.gameObjects.Where(obj => 
            obj.TryGetComponent(out MeshFilter meshFilter) && 
            obj.TryGetComponent(out MeshRenderer meshRenderer)).ToList();

        selectedList.makeItem = () => new ObjectField();
        selectedList.bindItem = (element, index) => (element as ObjectField).value = selectedObjects[index];
        selectedList.itemsSource = selectedObjects;
    };

    button.clicked += () =>
    {
        if (pathFolder.value == null) throw new System.Exception("No Directory Specified");
        if (selectedObjects.Count == 0) throw new System.Exception("No Objects Selected");

        string path = AssetDatabase.GetAssetPath(pathFolder.value.GetInstanceID());
        EditorPrefs.SetString("path", path);
        Combine combiner = new Combine($"{path}/{name.text}", selectedObjects);

        combiner.CombineMesh();
        if (createNewTexture.value) combiner.CombineTexture();
        if (createNewPrefab.value) combiner.CreateNewObject();
    };
}`,"Creating Prefab ▼":`public void CreateNewObject()
{
    string name = _path.Split("/").Last();
    Type[] components = new Type[2]
    {
        typeof(MeshFilter),
        typeof(MeshRenderer),
    };
    GameObject combinedObject = new GameObject(name, components);

    MeshFilter combinedMeshFilter = combinedObject.GetComponent<MeshFilter>();
    MeshRenderer combinedMeshRenderer = combinedObject.GetComponent<MeshRenderer>();

    string meshPath = SaveAssets.Rearrange($"{_path}_Mesh.asset")[1];
    string materialPath = SaveAssets.Rearrange($"{_path}_Material.mat")[1];

    Mesh combinedMesh = (Mesh)AssetDatabase.LoadAssetAtPath(meshPath, typeof(Mesh));
    Material combinedMaterial = (Material)AssetDatabase.LoadAssetAtPath(materialPath, typeof(Material));

    combinedMeshFilter.sharedMesh = combinedMesh;
    combinedMeshRenderer.sharedMaterial = combinedMaterial;

    SaveAssets.SaveFile($"{_path}.prefab", combinedObject);
}`},title:"Mesh Combiner",desc:"This is a Unity package I've been developing on and off again over about two weeks as an exploration into understanding UV’s and how meshes work. It has some real world use, specifically in very large modular systems where single rooms or structures are creating hundreds or thousands of draw calls, this tool can dramatically decrease the amount of draw calls without decreasing the quality of the environment. This also has limited use in creating props by using multiple overlapping scaled primitives.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"]))}};export{l as default};
