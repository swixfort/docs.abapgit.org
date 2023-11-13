import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c,a as e,b as t,d as s,w as m,e as o}from"./app-1062daa7.js";const l="/img/committing_changes.png",d="/img/committing_stage.png",g="/img/committing_commit_1.png",u="/img/committing_commit_2.png",h="/img/committing_done.png",p={},f=o('<p>When you have made changes to your local objects, you can stage and commit them to your git repository (also called &quot;push&quot;).</p><p>Changes are shown highlighted in the repository view. Each changed file is marked with a diff status depending on the type of change.</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Note: Always, check that you are on the correct URL (original or fork) and branch, before continuing.</p><h2 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> Stage</h2><p>Select &quot;Stage&quot; to collect the changed files into a staging area. All changed files are listed with their corresponding status.</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In order to commit any change to your repo, you can either select &quot;Add All and Commit&quot; or pick individual files using the action links to the right<br> and click &quot;Commii Selected&quot;.</p>',8),_=e("br",null,null,-1),y=o('<h2 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h2><p>Before any changes are transferred to your git repository, you can review them on the &quot;Commit Page&quot;. At the top you get a summary of how many files will<br> be added, remove, or ignored. You find list of files at the bottom.</p><p><img src="'+g+'" alt="" loading="lazy"><br><img src="'+u+'" alt="" loading="lazy"></p><p>For each commit, you have to enter three mandatory fields: &quot;Comment&quot;, &quot;Committer Name&quot;, and &quot;Committer Email&quot;. Optionally, you can enter a longer<br> description of your changes in &quot;Body&quot;. Or you may enter an &quot;Author Name&quot; and &quot;Author Email&quot; if it&#39;s different from the committer (i.e. the current user).</p><p>When you select &quot;Commit&quot;, your git repository will be updated.</p><p>abapGit will update the local state of the objects and return to the repository view. Objects that were committed are now listed as unchanged (i.e. identical<br> to the definition in git).</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7);function q(b,w){const i=n("RouterLink");return r(),c("div",null,[f,e("p",null,[t(`You can "add", "remove" or "ignore" files. "Add" will update the file on git or create it if it doesn't exist yet. "Remove" will drop the file from git.`),_,t(' "Ignore" will include the file in the '),s(i,{to:"/user-guide/repo-settings/dot-abapgit.html"},{default:m(()=>[t("ignore list")]),_:1}),t(" without changing it in git.")]),y])}const x=a(p,[["render",q],["__file","stage-commit.html.vue"]]);export{x as default};