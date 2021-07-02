import Home from "~/routes/Home.svelte"
import NotFound from "~/routes/NotFound.svelte"
import Finstate from "~/routes/Finstate.svelte"
import Stock from "~/routes/Stock.svelte"
import Board from "~/routes/Board.svelte"
import About from "~/routes/About.svelte"

const routes = {
    '/': Home,
    '/finstate/:id': Finstate,
    '/stock/:id': Stock,
    '/Board/:id': Board,
    '/about': About,
    '*': NotFound
}
export default routes