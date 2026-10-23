import {
  Component,
  type ComponentType,
  type ErrorInfo,
  type ReactNode,
} from 'react';
import { Phone, RefreshCw, AlertCircle } from 'lucide-react';
import { practiceConfig } from '@/config';

export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent?: ComponentType<ErrorFallbackProps>;
  /** Changing this clears a caught error. Pass the route to recover on navigation. */
  resetKey?: unknown;
}

interface ErrorBoundaryState {
  error: Error | null;
}

function toError(value: unknown): Error {
  if (value instanceof Error) {
    return value;
  }
  if (typeof value === 'string') {
    return new Error(value);
  }
  try {
    return new Error(JSON.stringify(value));
  } catch {
    return new Error(String(value));
  }
}

function DefaultFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f7f4ec] p-6 text-[#203b38]">
      <div className="max-w-md w-full text-center bg-[#fbfaf6] p-8 rounded-2xl border border-[#dfddd3] shadow-lg">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#dfe9df] text-[#1f5a50] flex items-center justify-center">
          <AlertCircle size={28} />
        </div>
        <h1 className="text-2xl font-serif font-medium text-[#163f39] mb-2">
          Difficulté d’affichage
        </h1>
        <p className="text-sm text-[#4a5751] leading-relaxed mb-6">
          Une difficulté inattendue est survenue lors de l’affichage de cette page. Vous pouvez recharger la page ou contacter directement le cabinet.
        </p>
        
        {import.meta.env.DEV ? (
          <pre className="mb-6 overflow-x-auto rounded bg-[#edf0e8] p-3 text-left text-xs text-[#203b38]">
            {error.message || String(error)}
          </pre>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={resetError}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f5a50] px-5 py-3 text-sm font-semibold text-white hover:bg-[#163f39] transition-colors"
          >
            <RefreshCw size={16} /> Recharger la page
          </button>
          <a
            href={practiceConfig.phoneLink}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f5a50] px-5 py-3 text-sm font-semibold text-[#1f5a50] hover:bg-[#dfe9df] transition-colors"
          >
            <Phone size={16} /> Appeler le cabinet
          </a>
        </div>
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { error: toError(error) };
  }

  componentDidCatch(error: unknown, info: ErrorInfo): void {
    console.error(
      'ErrorBoundary caught an error:',
      toError(error),
      info.componentStack,
    );
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (
      this.state.error !== null &&
      prevProps.resetKey !== this.props.resetKey
    ) {
      this.resetError();
    }
  }

  resetError = (): void => {
    this.setState({ error: null });
  };

  render(): ReactNode {
    const { error } = this.state;
    if (error === null) {
      return this.props.children;
    }
    const Fallback = this.props.FallbackComponent ?? DefaultFallback;
    return <Fallback error={error} resetError={this.resetError} />;
  }
}
