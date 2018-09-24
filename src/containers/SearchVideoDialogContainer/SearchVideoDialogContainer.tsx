import React from "react"

import { withRouter } from "react-router"
import { compose } from "recompose"

import { EVideoType } from "../../@types/EVideoType"
import SearchVideoDialog from "../../components/SearchVideoDialog/SearchVideoDialog"

interface IHocProps {
  history: any[]
}

interface IState {
  selectedType: EVideoType
}

class SearchVideoDialogContainer extends React.Component<IHocProps, IState> {
  public state: IState = {
    selectedType: "serie",
  }

  public render() {
    return (
      <SearchVideoDialog
        open
        selectedType={this.state.selectedType}
        resetRoute={this.resetRoute}
        handleChange={this.handleChange}
      />
    )
  }

  public resetRoute = () => {
    this.props.history.push("/")
  }

  public handleChange = (event: React.ChangeEvent<any>) => {
    this.setState({ selectedType: event.currentTarget.value })
  }
}

const enhance = compose<IHocProps, {}>(withRouter)

export default enhance(SearchVideoDialogContainer)
