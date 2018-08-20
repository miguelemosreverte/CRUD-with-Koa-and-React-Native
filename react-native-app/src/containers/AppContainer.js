import { connect } from 'react-redux'
import Main from '../components/Main'
import NewsList from '../components/NewsList'

import { news_reducer, GET_NEWS, getNews, listNews} from '../reducers/news'

const mapStateToProps = state => {
	return {
		news: getNews(state)
	}
}

const mapDispatchToProps = dispatch => ({
  	listNews: () => dispatch(listNews())
})


/*
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
export default AppContainer*/

export default connect(mapStateToProps, mapDispatchToProps)(Main);
