import styled from 'styled-components'

export interface BlockProps {
  blockContentData: {
    id: string
    contentType: string
  }
}

// This is the event that will be emitted when the cogwheel icon is clicked
export interface OpenSettingsModalEvent extends CustomEvent {
  detail: {
    id: string
    contentType: string
  }
}

const StandardBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const openSettingsModal = (props: BlockProps) => () => {

  const event: OpenSettingsModalEvent = new CustomEvent('openSettingsModal', {
    detail: {
      id: props.blockContentData.id,
      contentType: props.blockContentData.contentType,
    },
  })

  // Emit an event to open the settings modal
  window.dispatchEvent(event)
}

export const DefaultBlock = function (props: BlockProps) {

  const cogWheelSvg = (
    <svg
      fill="#FFFFFF"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 492.308 492.308"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d="M492.308,283v-73.692l-53.462-9.115c-4.846-20.413-12.885-39.798-23.971-57.769l31.385-44.279l-52.106-52.106 l-44.279,31.394c-17.99-11.096-37.365-19.144-57.769-23.981L282.99,0h-73.683l-9.115,53.452 c-20.413,4.846-39.798,12.885-57.769,23.971L98.144,46.038L46.038,98.144l31.394,44.279 c-11.096,17.99-19.144,37.365-23.981,57.769L0,209.308V283l53.452,9.106c4.837,20.404,12.885,39.779,23.981,57.769l-31.394,44.279 l52.106,52.106l44.279-31.385c17.971,11.086,37.346,19.125,57.769,23.981l9.115,53.452h73.683l9.115-53.452 c20.423-4.856,39.798-12.894,57.769-23.981l44.279,31.385l52.106-52.106l-31.385-44.279 c11.086-17.962,19.125-37.346,23.971-57.769L492.308,283z M421,281.567c-4.539,22.577-13.356,43.817-26.202,63.135l-3.74,5.635 l29.529,41.644l-28.606,28.606l-41.644-29.529l-5.635,3.74c-19.327,12.846-40.567,21.663-63.135,26.212l-6.625,1.337 l-8.567,50.269h-40.452l-8.567-50.269l-6.625-1.337c-22.567-4.548-43.808-13.365-63.135-26.212l-5.635-3.74l-41.644,29.529 l-28.606-28.606l29.529-41.644l-3.74-5.625c-12.856-19.356-21.663-40.596-26.202-63.144l-1.337-6.625l-50.269-8.558v-40.462 l50.269-8.567l1.337-6.625c4.538-22.548,13.346-43.788,26.202-63.144l3.74-5.625l-29.529-41.644l28.606-28.606l41.644,29.529 l5.635-3.74c19.327-12.846,40.567-21.663,63.135-26.202l6.625-1.337l8.567-50.269h40.452l8.567,50.269l6.625,1.337 c22.548,4.538,43.789,13.346,63.144,26.202l5.625,3.74l41.644-29.529l28.606,28.606l-29.529,41.644l3.74,5.635 c12.846,19.327,21.663,40.567,26.202,63.135l1.336,6.625l50.279,8.567v40.462l-50.279,8.558L421,281.567z"></path>{' '}
          </g>{' '}
        </g>{' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d="M246.154,139.51c-58.808,0-106.644,47.837-106.644,106.644c0,58.798,47.837,106.635,106.644,106.635 c58.798,0,106.635-47.837,106.635-106.635C352.788,187.346,304.952,139.51,246.154,139.51z M246.154,333.096 c-47.942,0-86.952-39-86.952-86.942s39.01-86.952,86.952-86.952s86.942,39.01,86.942,86.952S294.096,333.096,246.154,333.096z"></path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  )

  return (
    <StandardBlock key={props.blockContentData.id}>
      {props.blockContentData.contentType}

      {/* In the top-right corner, add a cogwheel icon */}
      <div style={{ position: 'absolute', top: 4, right: 4, color: 'white', fontSize: '20px' }} onClick={openSettingsModal(props)}>
        {cogWheelSvg}
      </div>
    </StandardBlock>
  )
}
