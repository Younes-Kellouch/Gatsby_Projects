const setUpTags = (recipes = []) => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) allTags[tag] = allTags[tag] + 1
      else allTags[tag] = 1
    })
  })
  console.log("array : " ,Object.entries(allTags))
  const newTags = Object.entries(allTags).sort((a,b)=>{
     // console.log("A :" +a )
     // console.log("B :" +b )
      const [firstTag] = a
     // console.log("firstTag :" +firstTag )
      const [secondTag] = b
     // console.log("secondTag :" +secondTag )

      return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setUpTags
