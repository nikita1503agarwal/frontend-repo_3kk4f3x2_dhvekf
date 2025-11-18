import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center text-slate-200">
            <h2 className="text-xl font-semibold">Something went wrong.</h2>
            <p className="text-slate-400 mt-2">Try reloading the page.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
