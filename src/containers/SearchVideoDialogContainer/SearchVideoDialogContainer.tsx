import * as React from "react"

import { withRouter } from "react-router"

import SearchVideoDialog from "../../components/SearchVideoDialog/SearchVideoDialog"

interface IHocProps {
  history: any[]
}

const SearchVideoDialogContainer = ({ history }: IHocProps) =>
  <SearchVideoDialog open handleChange={handleChange} selectedType="anime" resetRoute={() => resetRoute(history)} />

const handleChange = (event: React.ChangeEvent<any>) => {
  // this.setState({ selectedType: event.currentTarget.value })
}

const resetRoute = (history: any[]) => {
  history.push("/")
}

export default withRouter(SearchVideoDialogContainer)
