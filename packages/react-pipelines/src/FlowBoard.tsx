import styled from 'styled-components'
import { BlockData } from './utils/BlockUtils'
import { ConnectionCanvas } from './connections/ConnectionLine'
import useConnectionDrag from './hooks/useConnectionDrag'
import { useState } from 'react'
import { ConnectionLineData } from './utils/ConnectionUtils'

interface FlowBoardProps {
  id: string
  blockData: BlockData[]
  connectionLineData: ConnectionLineData[]
}

const Board = styled.div`
  position: relative;
  background-size: 16px 16px;
  background-color: #151515;
  background-image: radial-gradient(rgba(105, 105, 105, 1) 1px, transparent 1px);
  width: 90vw;
  height: 90vh;
`

const FlowBoard = (props: FlowBoardProps) => {
  const [blockData, setBlockData] = useState<BlockData[]>(props.blockData)

  const { blocks, connectionLines } = useConnectionDrag(blockData, props.connectionLineData)

  const dragStuff = (event: React.DragEvent<HTMLDivElement>) => {
    // console.log('dragStuff', event.clientX, event.clientY)
    event.preventDefault()
  }

  const dropStuff = (event: React.DragEvent<HTMLDivElement>) => {
    const movedBlockId = event.dataTransfer.getData('movedBlockId')
    const originalX = event.dataTransfer.getData('originX')
    const originalY = event.dataTransfer.getData('originY')
    console.log('dropStuff', movedBlockId, originalX, originalY)
    setBlockData((blocks) =>
      blocks.map((block) => {
        if (block.id === movedBlockId) {
          const newX = event.clientX + parseInt(originalX)
          const newY = event.clientY + parseInt(originalY)
          return {
            ...block,
            transformData: {
              translateX: newX,
              translateY: newY,
            },
          }
        }
        return block
      }),
    )
  }

  return (
    <Board id={props.id} className="flow-board" onDragOver={dragStuff} onDrop={dropStuff}>
      {blocks}
      <ConnectionCanvas key="connection-canvas" lines={connectionLines} />
    </Board>
  )
}

export default FlowBoard
