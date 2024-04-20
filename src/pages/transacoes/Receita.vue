<template>
<div id="structure">
  <asideNav />
  <main id="container-main">
    <h1>Receitas</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut dolor nemo deleniti voluptatibus ipsam
      quaerat. Natus soluta laboriosam ad, provident libero, quos aliquid impedit minus ratione quidem ipsam illo.
    </p>


    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
  </main>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>


</div>



    
</template>

<script setup>
import asideNav from "@/components/MenuAside.vue"


</script>