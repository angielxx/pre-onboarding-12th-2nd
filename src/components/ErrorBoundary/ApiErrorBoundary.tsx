import { Component, ErrorInfo, ReactNode } from 'react';

type FallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

type FallbackType = <ErrorType extends Error>(
  props: FallbackProps<ErrorType>
) => ReactNode;

interface Props {
  children?: ReactNode;
  fallback: FallbackType;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const initialState: State = {
  hasError: false,
  error: null,
};

class ApiErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  // 에러 발생 이후 폴백 UI를 렌더링하는데 사용
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  // 에러 로깅 : sentry etc.
  public static componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState(initialState);
  };

  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;

    // 폴백 UI
    if (error !== null) {
      return fallback({ error, reset: this.resetErrorBoundary });
    }
    return children;
  }
}

export default ApiErrorBoundary;
