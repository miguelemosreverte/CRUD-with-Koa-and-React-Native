import { connect } from 'react-redux'
import Main from '../components/Main'
import NewsList from '../components/NewsList'

import {GET_NEWS, getNews, CRUD as newsCRUD} from '../reducers/news'

const mapStateToProps = state => {
	return {
		news_state: getNews(state)
	}
}

const mapDispatchToProps = dispatch => ({
  	newsCRUD: (parameters) => dispatch(newsCRUD(parameters))
})


/*
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
export default AppContainer*/

export default connect(mapStateToProps, mapDispatchToProps)(Main);
