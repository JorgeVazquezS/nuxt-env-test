<script setup lang="ts">
    const config = useRuntimeConfig();
  </script>
  <template>
    <div>
        <div>Test Page</div>
        <div>testVar: {{ config.public.testVar }}</div>
    </div>
  </template>
  