import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  margin-top: 15px;
  .radio-list {
    margin: 20px 0 0 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;
        }

        .position {
          color: #666;
        }
      }
    }
  }
`
