// Minimal site-wide script stub to prevent MIME type errors
// Add global helpers here as needed by pages

document.addEventListener('DOMContentLoaded', function() {
    // Safe no-op to ensure script loads without errors
    // Common utilities can be added here later
    if (!window.siteUtils) {
        window.siteUtils = {
            version: '1.0',
            noop: function() {}
        };
    }
});
