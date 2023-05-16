// import { history } from 'umi';
import { Button, Result } from 'antd';
// onClick={() => history.push('/')}
const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="你访问的页面不存在！"
    extra={
      <Button type="primary" >
        回到首页
      </Button>
    }
  />
);

export default NoFoundPage;
