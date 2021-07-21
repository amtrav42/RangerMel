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
            calItemList.map((card) =>
              <h2>{card.node.childMdx.frontmatter.fictionalYear} {card.node.childMdx.frontmatter.fictionalMonth}</h2>
            )
          }
        </>  
      )
    }

    }
  ></StaticQuery>
)

export default CalendarCards