import * as React from "react"

import SearchVideoDialog from "../../components/SearchVideoDialog/SearchVideoDialog"

const SearchVideoDialogContainer = () => <SearchVideoDialog open handleChange={handleChange} selectedType="anime" />

const handleChange = (event: React.ChangeEvent<any>) => {
  // this.setState({ selectedType: event.currentTarget.value })
}

export default SearchVideoDialogContainer
