{include file='./partials/header.tpl'}

<div class="blog">

    <aside class="blog__sidebar">
        <h2>Blog example</h2>
    </aside>

    <div class="blog__content">
        {block name=body}
            {$body}
        {/block}
    </div>

</div>
{include file='./partials/footer.tpl'}