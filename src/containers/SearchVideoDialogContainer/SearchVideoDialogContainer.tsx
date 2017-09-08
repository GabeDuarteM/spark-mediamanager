import * as React from "react"

import { withRouter } from "react-router"
import { compose } from "recompose"

import SearchVideoDialog from "../../components/SearchVideoDialog/SearchVideoDialog"

interface IHocProps {
  history: any[]
}

class SearchVideoDialogContainer extends React.Component<IHocProps> {
  public render() {
    return <SearchVideoDialog open selectedType="anime" resetRoute={this.resetRoute} />
  }

  public resetRoute = () => {
    this.props.history.push("/")
  }

  // public handleChange = (event: React.ChangeEvent<any>) => {
  //   // this.setState({ selectedType: event.currentTarget.value })
  // }
}

const enhance = compose<IHocProps, {}>(withRouter)

export default enhance(SearchVideoDialogContainer)
