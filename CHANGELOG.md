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