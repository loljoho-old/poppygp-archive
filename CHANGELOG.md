# CHANGELOG

> What a bloody disaster!

**NOTE:** Changes are sorted in descending order.

<a name="1.0.0"></a>
## 1.0.0 (2015-May-28)

**Create New Release Branch**
```bash
git checkout -b release-1.0.0 develop
git commit -a -m "Release 1.0.0"
```

**Finalise Release**
```bash
git checkout master
git merge --no-ff release-1.0.0
git tag -a v1.0.0 -m "Release 1.0.0"
```

**Update Develop Branch**
```bash
git checkout develop
git merge --no-ff release-1.0.0
```

**Sidenote:**
> What a bloody disaster!
> 
> While I developed this project, I was still getting the hang of Semantic Versioning and git.
> 
> Apologies for the horrific practices.



===


# CHANGELOG

> What a bloody disaster!

**NOTE:** Changes are sorted in descending order.

<a name="0.0.0"></a>
## 0.0.0 (2015-May-28)

Initial commit.

---
```
# TEMPLATES

<a name="1.0.0-alpha.1"></a>
## 1.0.0-alpha.1 (1970-Jan-01)

Major version change description--why `0.1.0` to `1.0.0-alpha.1`?

**Breaking Changes**
 * Pre-release `alpha` versions are typically feature-incomplete.
 * These are usually not as available for public use.

**Features**
 * Pre-release `beta` versions are typically feature-complete.
 * These are usually available for use to the public.

**Bug Fixes**
 * Pre-release `rc` versions are feature-complete and merely in case of bug fixes.
 * Just needs a little bit of polish until the release.



<a name="0.1.0"></a>
### 0.1.0 (1970-Jan-01)

Minor version change description--why `0.0.1` to `0.1.0`?

**Features**
 * Functionality
 * Backwards-Compatible

**Bug Fixes**
 * Bug Fixes
 * Backwards-Compatible



<a name="0.0.1"></a>
#### 0.0.1 (1970-Jan-01)

Patch version change description--why `0.0.0` to `0.0.1`?

```bash
$ git status
On branch develop

$ git commit -m "Commit message"

# do work
git add .
git 
git tag 0.0.1 
```

**Bug Fixes**
 * Bug Fixes
 * Backwards-Compatible


<a name="0.0.0"></a>
## 0.0.0 (1970-Jan-01)

Initial commit.
```