import NextErrorComponent from 'next/error';
import * as Sentry from '@sentry/nextjs';

const CustomErrorComponent = props => {
  Sentry.captureUnderscoreErrorException(props);

  return <NextErrorComponent statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async contextData => {
  await Sentry.captureUnderscoreErrorException(contextData);

  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
