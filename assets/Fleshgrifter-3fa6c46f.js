import{P as t}from"./project-3cd4e6af.js";import{o as e,c as a}from"./index-cf8ed356.js";const h={__name:"Fleshgrifter",setup(i){return(n,o)=>(e(),a(t,{"project-pictures":["/FleshgrifterMedia/FleshgrifterPlaythrough.mp4","/FleshgrifterMedia/FleshgrifterVent.png","/FleshgrifterMedia/FleshgrifterLabToWarehouse.png","/FleshgrifterMedia/FleshgrifterChaseWarehouse.png","/FleshgrifterMedia/FleshgrifterUnderDeskLab.png","/FleshgrifterMedia/FleshgrifterLabToCafeteria.png"],"project-links":{"itch.io":"https://vfs-gdpg.itch.io/bard-is-broke"},"code-snippets":{"Patroling System Snippet ▼":`/// <summary>
/// reset the stopping distance to the correct stopping distance
/// If we have reached the end of the patrol path loop it
/// 
/// Set current to next
/// Increment next
/// 
/// set next target to the next patrol point
/// </summary>
private void UpdatePath()
{
_navigationMeshAgent.stoppingDistance = _patrolStoppingDistance;
if (_nextPathPosition == _patrolPaths[(int)_currentRoom].Count)
{
_nextPathPosition = 1;
}

_currentPathPosition = _nextPathPosition;
++_nextPathPosition;

_nextTarget = _patrolPaths[(int)_currentRoom][_currentPathPosition].position;
}`,"Animation Snippet ▼":`/// <summary>
/// Set the animation direction to the direction towards the end of the path ignoring y
/// 
/// Sets the remaining distance so that if it is farther away than the stopping distance 
/// of the navmesh it is equal to the current speed of the monster (1 for patrolling 2 for chasing) 
/// or 0.01 so that the monster comes to almost a complete stop
/// 
/// The reason I do not set it to 0 is because the idle animation that will play once we get past 
/// the stopping distance might lean back or move away and then it gets a little buggy and starts 
/// walking and stopping over and over again, so this 0.01 assures us that it will still be close 
/// enough to its destination for the whole time it is not supposed to be moving 
/// 
/// Set the animation forward magnitude to _remaining distance, but doing as suddenly as _remaining
/// distance often looks quite bad so I lerp between the values and this also allows us to use a nice 
/// looking slider for my designers to play with
/// 
/// Finally the animators blend trees value is set based on the animation forward magnitude
/// </summary>
private void MoveAnimation()
{
  Vector3 pathEndOrCornerOne = Vector3.zero;
  try
  {
      pathEndOrCornerOne = _navigationMeshAgent.path.corners[1];
  }
  catch
  {
      pathEndOrCornerOne = _navigationMeshAgent.pathEndPosition;
  }
  Vector3 direction = (_monsterFeet._startChase) ? pathEndOrCornerOne : _navigationMeshAgent.pathEndPosition;
  _animationDirection = direction - _navigationMeshAgent.nextPosition;
  _animationDirection.y = 0;

  _remainingDistance = (_animationDirection.magnitude > _navigationMeshAgent.stoppingDistance) ? _monsterFeet._currentAnimationState : 0;
  _animationForwardMagnitude = Mathf.Lerp(_animationForwardMagnitude, _remainingDistance, _smoothing);

  _animator.SetFloat("move", _animationForwardMagnitude);
}`,"State Machine Snippet ▼":`/// <summary>
/// sets all the navmesh values to the appropriate vales from the inspector
/// 
/// sets next target so that the monster moves
/// sets the animation state to the patrol state
/// 
/// constantly checks if it can enter chase mode
/// </summary>
private IEnumerator Patrol()
{
  _navigationMeshAgent.stoppingDistance = _patrolStoppingDistance;
  _navigationMeshAgent.speed = _patrolSpeed;
  _navigationMeshAgent.angularSpeed = _patrolTurnSpeed;
  _navigationMeshAgent.acceleration = _patrolAcceleration;

  _startChase = false;

  _nextTarget = _patrolPaths[(int)_currentRoom][_currentPathPosition].position;
  _currentAnimationState = (int)AnimationStates.patrol;
  bool playerActivatedTheChase = false; 

  while (true)
  {
      if (_killed) break;
      _minimumDistance = (_player._isSneak) ? _minimumSneakDistanceFromTheMonster : _minimumStandingDistanceFromTheMonster;

      playerActivatedTheChase = (Mathf.Abs(_player.GetMove().x) > 0 || Mathf.Abs(_player.GetMove().y) > 0) && (_playerTransform.position - transform.position).magnitude < _minimumDistance;

      if (_eyes._sawThePlayer || playerActivatedTheChase)
      {
          _eyes._sawThePlayer = true;
          ChangeState(Chase());
      }
      yield return null;
  }
}`},title:"Fleshgrifter",desc:"Fleshgrifter is a First Person Stealth Horror game made in Unity from April to June 2023. I was the primary programmer. The team spent a lot of time discussing how the implementation of the monster should work, as the monster was the most important part of the game. It was decided that, to show off the animation capabilities of our artist, that the monster should be driven by root motion animation. I had to learn what root motion animation was as well as how to make it cooperate with Unity’s implementation of Nav Mesh. The solution I ended up using was allowing the navmesh agent attached to the monster to control the monster rotation while having the animator's root motion move it forward and back. This implementation still has some issues (the monster occasionally likes to walk right through walls for example) but given my time restraint and my knowledge at the time I’m still quite proud of it.","title-delay":300,"desc-delay":600,"links-delay":900,"img-delay":700,randomize:!1},null,8,["project-pictures","project-links","code-snippets"]))}};export{h as default};
