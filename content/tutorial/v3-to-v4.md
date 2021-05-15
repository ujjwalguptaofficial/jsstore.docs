---
Title: "Migrating from v2 to v3"
Keywords: "migrate, v2, v3, indexeddb, jsstore"
Description: "migrating from v2 to v3"
---

<p class="highlight">
v4 now suports multiple database feature, which was lacking in earlier version of jsstore. In order to do that some big changes has been done in v4.
</p>

There are two ways to migrate from v3 to v4 -

1. Increase db version greater than current version. This step will recreate database & in turn all your data will be cleared.

2. Create a temporary table with a version greater than current version. This step will not do any change in saved data.





