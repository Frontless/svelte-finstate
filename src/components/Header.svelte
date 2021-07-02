<script>
    import {link, push} from "svelte-spa-router"
    import active from "svelte-spa-router/active"
    const menus = [
        {
            href: '/',
            name: '홈',   
            path: '/'     
        },
        {
            href: '/stock',
            name: '주식',
            path: '/stock'
        },
        {
            href: '/finstate',
            name: '재무제표',
            path: '/finstate'
        },        
        {
            href: '/board',
            name: '게시판',
            path: '/board'
        },
        {
            href: '/about',
            name: '사이트',    
            path: /^\/about/    
        }
    ]
</script>

<header>
    <nav>
        <ul>
            {#each menus as {href, name, path} (name)}
                <li>
                    <a use:link use:active={path} {href}>{name}</a>
                </li>
            {/each}
        </ul>
    </nav>
    <div class="user">
        <img src="/assets/black/userIcon_default.png" alt="user"/>
    </div>
</header>

<style lang="scss">
    header{
        padding: 20px 40px;
        background-color: $color--black-90;
        position: sticky;
        top:0;
        z-index: 9;
        display: flex;
        align-items: flex-end;
        @media #{$mobile} {
            padding:  14px 20px;
        }
        nav{
            margin-left: 40px;
            @media #{$mobile} {
                display:none;
            }
            ul{
                display: flex;
                li{
                    margin-left: 10px;
                    &:first-child{
                        margin-left: 0;
                    }
                    a{
                        font-size: 20px;
                        font-weight: 700;
                        color: $color--white-50;
                        text-decoration: none;
                    }
                }
            }
        }
        .user{
            width: 40px;
            height: 40px;
            padding: 6px;
            border-radius:  50%;
            background-color: $color--area;
            cursor: pointer;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 40px;
            margin: auto;
            transition: .4s;
            @media #{$mobile} {
                right:20px
            }
            &:hover{
                background-color: lighten($color--area, 20%);
            }
            img{
                width: 100%;
            }
        }
    }
    header :global(a.active){
        color: $color--primary !important;
    }
    :global(body){
        height: 3000px
    }
</style>