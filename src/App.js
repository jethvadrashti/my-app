

import React from 'react';
import Tree from 'react-d3-tree';
import './CustomTree.css';
// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  // name: 'Production',
  children: [
    {
      name: 'Research',
      children: [
        {
          name: 'External',
          children: [
            {
              name: 'B2C',
              children : [
                {
                  name : 'Online'
                },
                {
                  name : 'Interview'
                },
                {
                  name : 'Public Data'
                },
                {
                  name : 'Health'
                }
              ]
            },
          ],
        },
        {
          name : 'Internal'
        }
      ],
    },
    {
        name : 'Planning',
        children : [
          {
            name : 'PRD'
          },
          {
            name : 'Specs'
          }
        ]
    },
    {
      name : 'Desiging',
      children : [
        {
          name : 'Hardware'
        },
        {
          name : 'Software'
        }
      ]
  },
  {
    name : 'Manufacturing',
    children : [
      {
        name : 'Material'
      },
      {
        name : 'Production'
      }
    ]
},
{
  name : 'Sales/Marketing',
  children : [
    {
      name : 'Online'
    },
    {
      name : 'Dealearship'
    }
  ]
},
  ],
};

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width:'1000em', height: '1000em', alignContent : 'center' }}>
      <Tree data={orgChart}
      rootNodeClassName="node__root"
      branchNodeClassName="node__branch"
      leafNodeClassName="node__leaf"
      pathFunc={'step'}
       />
    </div>
  );
}