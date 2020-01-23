package min.max

import org.junit.Test
import org.assertj.core.api.Assertions.assertThat

fun solution(value: String): String {
    val arr: List<Int> = value.split(" ").map{it.toInt()};
    return intArrayOf(arr.min()?:0,arr.max()?:0).joinToString(" ")
}
class MinMaxValue {

    @Test
    fun `Get Min Max Value`() {
        assertThat(solution("1 2 3 4")).isEqualTo("1 4")
        assertThat(solution("-1 -2 -3 -4")).isEqualTo("-4 -1")
        assertThat(solution("-1 -1")).isEqualTo("-1 -1")
    }
}