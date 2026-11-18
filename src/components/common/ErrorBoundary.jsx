import { Component } from "react";

// ==========================
// Filet de sécurité React
// Si une section plante (donnée inattendue de l'API…),
// seule cette section disparaît au lieu de toute la page.
// ==========================

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error(
            `Erreur dans la section « ${this.props.name || "inconnue"} » :`,
            error,
            info?.componentStack
        );
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
        return this.props.children;
    }

}

export default ErrorBoundary;
