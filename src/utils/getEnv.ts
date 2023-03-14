export function getEnv(variable: string, defaultValue: any): any {
    const t =
        (window as any)._env_ && (window as any)._env_[variable]
            ? (window as any)._env_[variable]
            : process.env[`REACT_APP_${variable}`]
            ? process.env[`REACT_APP_${variable}`]
            : defaultValue || undefined;
    return t;
}
