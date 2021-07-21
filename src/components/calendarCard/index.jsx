import React from "react"
import { StaticQuery, graphql } from "gatsby"

const CalendarCards = () => (
  <StaticQuery
    query={graphql`
      {
        allFile {
          edges {
            node {
              childMdx {
                frontmatter {
                  fictionalMonth
                  fictionalYear
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const calItemList = data.allFile.edges;
      return (
        <>
          {
            calItemList.map((card) => {
              const calItemMap = card.node.childMdx.frontmatter;
              return (
                <h2>{calItemMap.fictionalYear} {calItemMap.fictionalMonth}</h2>
              )
            })
          }
        </>  
      )
    }

    }
  ></StaticQuery>
)

export default CalendarCards