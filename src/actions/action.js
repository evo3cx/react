//'isomorphic-fetch'  Do this in every file where you use `fetch`
import fetch from 'isomorphic-fetch'

export const SELECT_SUBREDDIT =   'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit){
  return{
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidateSubreddit(subreddit){
  return{
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(subreddit){
  return{
    type:REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(subreddit, json){
  return{
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now()
  }
}


// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit){
  //Thunk middleware know how to handle function
  // it pases the dispatch method as an argument to the function
  // this making it able to dispatch actions itself

  return function(dispatch){

    // First dispatch: the app state is update to inform
    // that the API call is starting
    dispatch(requestPosts(subreddit))

    console.log(subreddit)
    // In this case, we return a promise to wait for.
    // This is not required by midleware, bu it is convenient
    return fetch(`http://www.redit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json=>
        // We can dispatch many times!
        // here, we update the app state with results of th API
        dispatch(receivePosts(subreddit, json))

        // In a real app world, you alwso want to
        //catch any error in the network call.
      )
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    console.log(dispatch)
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}
