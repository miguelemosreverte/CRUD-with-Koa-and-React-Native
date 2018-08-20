import { connect } from 'react-redux'
import Main from '../components/Main'

import {getNews, CRUD as newsCRUD} from '../reducers/news'
import {getAuth, login, register} from '../reducers/auth'

const mapStateToProps = state => {
	return {
		news_state: getNews(state),
		login_state: getAuth(state)
	}
}

const mapDispatchToProps = dispatch => ({
  	newsCRUD: parameters => dispatch(newsCRUD(parameters)),
  	login: parameters => dispatch(login(parameters)),
  	register: parameters => dispatch(register(parameters))
})






export default connect(mapStateToProps, mapDispatchToProps)(Main);
