import type { FC, JSX, PropsWithChildren } from 'react';

type GetEventHandlers<T extends keyof JSX.IntrinsicElements> = Extract<keyof JSX.IntrinsicElements[T], `on${string}`>;

declare global {
  /**
   * @note
   * Provides the event type for a given element and handler:
   * https://www.totaltypescript.com/event-types-in-react-and-typescript#solution-4-use-an-eventfrom-helper
   *
   * @example
   * type MyEvent = EventFor<"input", "onChange">;
   */
  type EventFor<
    TElement extends keyof JSX.IntrinsicElements,
    THandler extends GetEventHandlers<TElement>,
  > = JSX.IntrinsicElements[TElement][THandler] extends ((e: infer TEvent) => any) | undefined ? TEvent : never;

  namespace Next {
    type PageSearchParams = Record<string, string | string[] | undefined>;

    type ErrorPageBoundaryProps = {
      error: Error & { digest?: string };
      reset: () => void;
    };

    type GlobalErrorPageParams = ErrorPageBoundaryProps;
  }
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export {};
