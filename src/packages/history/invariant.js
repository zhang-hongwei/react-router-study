// export { default } from 'tiny-invariant';
const isProduction = process.env.NODE_ENV === "production";
const prefix = "Invariant failed";
export default function invariant(condition, message) {
    if (condition) {
        return;
    }
    // Condition not passed

    if (isProduction) {
        // In production we strip the message but still throw
        throw new Error(prefix);
    } else {
        // When not in production we allow the message to pass through
        // *This block will be removed in production builds*
        throw new Error(`${prefix}: ${message || ""}`);
    }
}
