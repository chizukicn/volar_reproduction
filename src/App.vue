<script lang="tsx">
import { defineComponent } from "vue";
import { Chart } from "@antv/g2";

export default defineComponent({

  setup() {
    const chart = new Chart();
    return () => {
      return (
        <div class="w-full h-full bg-white overflow-y-auto p-5">
        </div>
      );
    };
  }
});
</script>
