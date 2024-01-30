import{P as e}from"./project-7991ed78.js";import{o as t,c as n}from"./index-b6ada6fa.js";const l={__name:"JSON-Editor",setup(a){return(o,i)=>(t(),n(e,{"project-pictures":["/JSONEditorMedia/ReactAppDemo.mp4","/JSONEditorMedia/ReactAppJSON.png","/JSONEditorMedia/ReactAppTitle.png"],"project-links":{GitHub:"https://github.com/Connor-J-deBoer/REACTJsonEditor.git","Live Demo":"https://connor-j-deboer.github.io/REACTJsonEditor/"},"code-snippets":{"Render Object ▼":`function RenderObject (updateMarkup, object, name = "", nesting = 0, parents = [])
{
    // this array contains all of the parent names we have so far, it needs to be assigned to 
    // this way because else wise the parents will update prematurely and wont reset properly 
    // (tested, which means in a month or so dont come back and spend another 30 minutes looking 
    // into "why dont I do parentArray = parents")
    const parentArray = [];
    for (let parent of parents)
    {
        parentArray.push(parent);
    }
    // if we dont have a name we dont want to add to the parenting
    if (name !== "") parentArray.push(name);

    // adds a header with some nesting repersenting the object name, so we know that the nested 
    // properties below it are part of the parent object
    updateMarkup(
        <div key={\`\${name}-container\`} className="input-container">
            <h1 className="input-title" >{Tab.repeat(nesting * NestingModifier)}</h1>
            <h1 style={{right: \`\${nesting * 10}px\`}} className="input-title">{name}</h1>
        </div>
    );
    nesting++;
    // loop though all the properties of the object and render them
    for (let [key, value] of Object.entries(object))
    {
        RenderFile(updateMarkup, \`\${key}\`, value, nesting, parentArray);
    }
}`,"Connectin Input to Data Snippet ▼":`// this guy makes sure that the input field is properly connected to the data its representing, 
// taking into account all the possible nesting
const RenderInputField = ({value, type, name, parentNames}) =>
{
    const [uiValue, setUIValue] = useState(value);

    const updateValue = (newValue) =>
    {
        const fileJson = GetFileData();

        if (parentNames.length === 0)
        {
            fileJson.data[name] = type === "number" ? Number(newValue) : newValue;
        }
        else
        {
            let current = fileJson.data;
            for (let parent of parentNames)
            {
                current = current[parent];
            }
            current[name] = type === "number" ? Number(newValue) : newValue;
        }
        
        setUIValue(newValue);
        SetFileData(fileJson);
    }

    return(
        <input
            className="input-field"
            type={type === "boolean" ? "checkbox" : type}
            checked={type === "boolean" ? uiValue : undefined}
            value={type !== "boolean" ? uiValue : undefined}
            onChange={event => updateValue(type === "boolean" ? event.target.checked : event.target.value)}
        />
    );
}`,"Event Dispatcher ▼":`const fileRead = new CustomEvent("onFileRead");

function FileUploader()
{
    const handleChange = (event) =>
    {
        // this event.target.files[0] just grabs the first file the user dropped, if they dropped more than one
        const file = event.target.files[0];

        // we set the file name here so that when the user wishes to download the finished version they easily can
        SetFileName(file.name);

        // file reader is gonn allow us to get our JSON string
        const reader = new FileReader();

        // this onload gets called when our reader is done reading, the reason we have the onload before the
        // read as text is because it prevents a possible race condition
        reader.onload = (content) =>
        {
            // this is where the json string gets assigned to the fileContent string
            const fileContent = content.target.result;
            SetFileData({"data": JSON.parse(fileContent)});
            document.dispatchEvent(fileRead);
        };
        reader.readAsText(file);
    }

    return(
        <div className="container">
            <input
                className="input"
                type="file"
                accept="json"
                onChange={(event) => handleChange(event)}
            />
        </div>
    );
}`},title:"JSON Editor",desc:"This guy is a very small project I made to teach myself the React framework. I spent about a week working on it on and off between contract work and applying for full time jobs, and I actually had a lot of fun! This guy is what it says on the tin, it’s a simple JSON editor. It’s more of a continuation of a previous project that dealt a lot with JSON and I wanted to flesh out an idea I didn’t have time for on that project. The actual coding of this project wasn’t very complicated, I had fun coming up with a recursive algorithm that finds all the nested data in the json but that only took 2 or 3 hours. The challenging part of this project was wrapping my head around JSX and getting the input fields and data properly connected to each other. I found all of that quite intuitive in Vue but in React I was scratching my head before eventually figuring out how to properly use the ‘useState’ function. One thing that I’m thinking about adding in the future might be giving the user the ability to add properties which I might come back to with this project but right now I’m looking forward to more game related programming as that is the focus of my next project.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"]))}};export{l as default};
