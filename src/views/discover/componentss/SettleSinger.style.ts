import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top: 15px;
  .artists {
    margin: 6px 0 14px 20px;
    .artists-item {
      margin-top: 14px;

      > a {
        display: flex;
        width: 210px;
        height: 62px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        &:hover {
          background-color: #f4f4f4;
        }
        .head {
          width: 60px;
          height: 60px;
          box-sizing: border-box;
          > img {
            width: 100%;
          }
        }
        .info {
          width: 130px;
          /* flex: 1; */
          height: 60px;
          margin: 8px 0 0 10px;
          .title {
            margin-top: 8px;
            color: #333;
            font-size: 16px;
            font-weight: 700;
          }

          .name {
            margin-top: 8px;
          }
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
      margin: 0 20px;
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
`
