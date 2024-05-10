import{P as a}from"./project-3b0b66bc.js";import{o as e,c as t}from"./index-90f9d59b.js";const r={__name:"Mamas-Llamas",setup(i){return(o,s)=>(e(),t(a,{"project-pictures":["/MamasLlamasMedia/MamasLlamasPlaythrough.mp4","/MamasLlamasMedia/MamasLlamasLeaderboard.png","/MamasLlamasMedia/MamasLlamasUGS.png","/MamasLlamasMedia/MamasLlamasMenu.png","/MamasLlamasMedia/MamasLlamasClimbing.png","/MamasLlamasMedia/MamasLlamasTourist.png","/MamasLlamasMedia/MamasLlamasEnding.mp4"],"project-links":{GitHub:"https://github.com/pedroeperezn/GGJ2024-SoopSoup","itch.io":"https://pedroeperezn.itch.io/mamas-llamas"},"code-snippets":{"Manage Gravity Scale Snippet ▼":`private void ManageGravityScale()
{
    RaycastHit2D hit = Physics2D.Raycast(transform.position, Vector2.down, Mathf.Infinity, LayerMask.GetMask("Ground"));
    if (hit.collider == null || Array.IndexOf(IsSticking, true) != -1 || IsFlying)
    {
        _rb.gravityScale = 1;
        return;
    }

    float distance = Mathf.Abs(hit.point.y - transform.position.y);
    _rb.gravityScale = _scaleModifier.Evaluate(distance) * ((CurrentlyMovingLimbCount > 1) ? CurrentlyMovingLimbCount : 1);
}`,"Collision Callback Snippet ▼":`public class CollisionCallback2D : MonoBehaviour
{
    ICollisionCallback _listener = null;
    public void Initialize<T>(T listener) where T : ICollisionCallback
    {
        _listener = listener;
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        _listener?.CollisionHandler(collision);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        _listener?.TriggerHandler(collision);
    }
}`,"Posting To Leaderboard Snippet ▼":`public async Task<LeaderBoardPlace> PostScores(string leaderboardId, string playerName, int score)
{
    LeaderBoardPlace output;
    try
    {
        await _authorize.SetPlayerName(playerName);
        var result = await LeaderboardsService.Instance.AddPlayerScoreAsync(leaderboardId, score);

        output.Name = result.PlayerName;
        output.Rank = result.Rank;
        output.Score = (int)result.Score;
    }
    catch (Exception e)
    {
        Debug.LogError(e);
    }

    Debug.Log($"Posted {score} to {leaderboardId}");
    return output;
}`},title:"Mama's Llama's",desc:"Mama’s Llama’s is a 2D side scroller made in Unity 2D as part of the 2024 Global Game Jam Vancouver. I was the Gameplay programmer as well as the build master. The theme for this jam was “Make Me Laugh” so as a team, we chose to draw inspiration from a game I used to play as a kid, “Mount Your Friends”. Which took advantage of the comedic genius of ragdolls. I used hinge joints to create my ragdoll, and spring joints that were attracted to the mouse to move the limbs. One pretty tricky thing was figuring out how to make sure the llama couldn’t just fly away by using all their limbs at once. What I ended up doing was creating a script that paid attention to two things, one how many limbs the player was moving, and two how far off the ground the llama was. Using these measurements it would change the weight of each limb and change the gravity scale of the main body of the llama, making the llama feel both nimble and heavy depending on the circumstance. I also had fun integrating the Unity Gaming Services Leaderboards as a small way to add a little competition to the game. It might be fun to come back to this project in the future and add some more levels, and different mountains and tie it back into the setting of Machu Picchu a little, given another few months I could see this becoming a shippable game.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"]))}};export{r as default};
